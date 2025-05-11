const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to the assets directory
const assetsDir = path.join(__dirname, 'src', 'assets');

// Get all image files in the assets directory
const imageFiles = fs.readdirSync(assetsDir)
    .filter((file) => /\.(png|jpg|jpeg|gif)$/i.test(file));

/**
 * Converts image files to WebP format for better web performance
 * Processes all PNG, JPG, JPEG, and GIF files in the assets directory
 * Skips already converted files and provides size reduction statistics
 * For GIFs, only the first frame is extracted to WebP
 * @return {Promise<void>} A promise that resolves when all conversions are complete
 */
async function convertImages() {
  console.log('Starting image conversion to WebP...');

  for (const file of imageFiles) {
    const filePath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, `${path.parse(file).name}.webp`);

    // Skip if WebP version already exists
    if (fs.existsSync(outputPath)) {
      console.log(`Skipping ${file} - WebP version already exists`);
      continue;
    }

    console.log(`Converting ${file} to WebP...`);

    try {
      // For GIF files, we'll extract the first frame
      if (file.toLowerCase().endsWith('.gif')) {
        await sharp(filePath, {animated: false})
            .webp({quality: 80})
            .toFile(outputPath);
      } else {
        await sharp(filePath)
            .webp({quality: 80})
            .toFile(outputPath);
      }

      console.log(`Successfully converted ${file} to WebP`);

      // Get file sizes for comparison
      const originalSize = fs.statSync(filePath).size;
      const webpSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(2);

      console.log(`Size reduction: ${originalSize / 1024}KB -> ${webpSize / 1024}KB (${savings}% smaller)`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }

  console.log('Image conversion completed');
}

convertImages().catch(console.error);
