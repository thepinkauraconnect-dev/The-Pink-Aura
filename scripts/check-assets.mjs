/**
 * Verifies that every local image/video path referenced in source exists in /public
 * (including the "-640.webp" variants used by lib/image-loader.ts).
 * Usage: node scripts/check-assets.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIRS = ['app', 'components', 'data', 'lib'];
const RE = /['"`](\/(?:images|Videos)\/[^'"`]+?\.(?:webp|png|jpe?g|m3u8|mp4)|\/[\w-]+\.(?:webp|png|jpe?g))['"`]/g;

const files = DIRS.flatMap(function walk(d) {
  const abs = path.join(ROOT, d);
  if (!fs.existsSync(abs)) return [];
  return fs.readdirSync(abs, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : /\.(tsx?|mjs)$/.test(e.name) ? [path.join(d, e.name)] : [],
  );
});

const missing = new Set();
let checked = 0;
for (const f of files) {
  const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
  for (const [, ref] of src.matchAll(RE)) {
    if (ref.includes("${")) continue; // template literal, checked below
    const decoded = decodeURIComponent(ref);
    const candidates = [decoded];
    if (decoded.endsWith('.webp') && !decoded.endsWith('-640.webp') && decoded.startsWith('/images/')) {
      candidates.push(decoded.replace(/\.webp$/, '-640.webp'));
    }
    for (const c of candidates) {
      checked++;
      if (!fs.existsSync(path.join(ROOT, 'public', c))) missing.add(`${c}  (in ${f})`);
    }
  }
}

// HLS videos referenced through the HLS() helper
for (const name of ['hero_display_1', 'hero_display_2', 'hero_display_3']) {
  for (const f of ['master.m3u8', 'poster.webp']) {
    checked++;
    if (!fs.existsSync(path.join(ROOT, 'public/Videos/hls', name, f))) missing.add(`/Videos/hls/${name}/${f}`);
  }
}

if (missing.size) {
  console.error(`Missing ${missing.size} asset(s):\n  ${[...missing].join('\n  ')}`);
  process.exit(1);
}
console.log(`OK — ${checked} asset references checked, none missing.`);
