/**
 * Converts every PNG/JPG/JPEG in /public/images (and selected root images) into
 * compressed WebP, plus a "-640.webp" mobile/card variant used by lib/image-loader.ts.
 * Existing .webp files get the -640 variant (and are downsized if > MAX_WIDTH).
 * Originals are deleted afterwards (pass --keep to keep them).
 *
 * Also generates: public/og-image.jpg (1200x630), app/icon.png (512), app/apple-icon.png (180).
 *
 * Usage: node scripts/optimize-images.mjs [--keep]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const KEEP = process.argv.includes('--keep');

const MAX_WIDTH = 1600;
const SMALL_WIDTH = 640;
const RASTER = /\.(png|jpe?g)$/i;

const ROOT_FILES = ['landing_page_hero_logo.png', 'logo-header.png'];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : [p];
  });
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

async function encode(input, output, width, hasAlpha) {
  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: hasAlpha ? 82 : 72, alphaQuality: 90, effort: 6, smartSubsample: true })
    .toFile(output);
}

async function processFile(file) {
  const isWebp = /\.webp$/i.test(file);
  if (!isWebp && !RASTER.test(file)) return null;
  if (/-640\.webp$/i.test(file)) return null;

  const before = fs.statSync(file).size;
  const meta = await sharp(file).metadata();
  const hasAlpha = Boolean(meta.hasAlpha);
  const base = file.replace(/\.(png|jpe?g|webp)$/i, '');
  const full = `${base}.webp`;
  const small = `${base}-640.webp`;

  if (isWebp) {
    if ((meta.width ?? 0) > MAX_WIDTH) {
      const tmp = `${base}.tmp.webp`;
      await encode(file, tmp, MAX_WIDTH, hasAlpha);
      fs.renameSync(tmp, full);
    }
    await encode(full, small, SMALL_WIDTH, hasAlpha);
  } else {
    await encode(file, full, MAX_WIDTH, hasAlpha);
    await encode(file, small, SMALL_WIDTH, hasAlpha);
    if (!KEEP) fs.unlinkSync(file);
  }

  const after = fs.statSync(full).size;
  return { file: path.relative(PUBLIC, file), before, after, small: fs.statSync(small).size };
}

async function main() {
  // 1. Generated assets first (from originals, before they are deleted)
  const heroSrc = ['images/hero/hero.png', 'images/hero/hero.webp']
    .map((p) => path.join(PUBLIC, p))
    .find((p) => fs.existsSync(p));
  if (heroSrc) {
    await sharp(heroSrc).resize(1200, 630, { fit: 'cover', position: 'attention' })
      .jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(PUBLIC, 'og-image.jpg'));
  }
  const logoSrc = ['images/logo/Logo the pink aura.png', 'images/logo/Logo the pink aura.webp']
    .map((p) => path.join(PUBLIC, p))
    .find((p) => fs.existsSync(p));
  if (logoSrc) {
    const pad = { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } };
    await sharp(logoSrc).resize(512, 512, pad).png({ compressionLevel: 9, palette: true })
      .toFile(path.join(ROOT, 'app', 'icon.png'));
    await sharp(logoSrc).resize(180, 180, { ...pad, background: { r: 255, g: 243, b: 246, alpha: 1 } })
      .png({ compressionLevel: 9 }).toFile(path.join(ROOT, 'app', 'apple-icon.png'));
  }

  // 2. Convert everything
  const files = [
    ...walk(path.join(PUBLIC, 'images')),
    ...ROOT_FILES.map((f) => path.join(PUBLIC, f)).filter((f) => fs.existsSync(f)),
  ];

  let totalBefore = 0;
  let totalAfter = 0;
  const rows = [];
  for (const file of files) {
    const r = await processFile(file);
    if (!r) continue;
    totalBefore += r.before;
    totalAfter += r.after + r.small;
    rows.push(r);
    console.log(`${r.file.padEnd(70)} ${kb(r.before).padStart(9)} -> ${kb(r.after).padStart(7)} (+640: ${kb(r.small)})`);
  }

  // Unused root icon (replaced by app/icon.png)
  const oldIcon = path.join(PUBLIC, 'icon.png');
  if (!KEEP && fs.existsSync(oldIcon)) fs.unlinkSync(oldIcon);

  console.log(`\n${rows.length} images: ${(totalBefore / 1048576).toFixed(1)} MB -> ${(totalAfter / 1048576).toFixed(1)} MB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
