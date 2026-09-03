const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '../public/images/services/WEB IMAGES');

async function processImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.png')) continue;
    const inputPath = path.join(dir, file);
    const outputName = file.replace(/\.png$/i, '.webp');
    const outputPath = path.join(dir, outputName);

    const statsBefore = fs.statSync(inputPath);
    console.log(`Processing: ${file} (${(statsBefore.size / 1024 / 1024).toFixed(2)} MB)...`);

    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    const statsAfter = fs.statSync(outputPath);
    console.log(`  -> Created ${outputName} (${(statsAfter.size / 1024).toFixed(1)} KB)`);
  }
  console.log('All images converted to WebP successfully!');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
