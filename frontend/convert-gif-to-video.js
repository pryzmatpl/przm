const fs = require('fs');
const path = require('path');
const {exec} = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

// Path to the assets directory
const assetsDir = path.join(__dirname, 'src', 'assets');

// Get all GIF files in the assets directory
const gifFiles = fs.readdirSync(assetsDir)
    .filter((file) => file.toLowerCase().endsWith('.gif'));

/**
 * Converts GIF files to MP4 and WebM video formats for better performance
 * Scans the assets directory for GIF files and creates optimized video versions
 * Skips already converted files and provides size comparison statistics
 * @return {Promise<void>} A promise that resolves when all conversions are complete
 */
async function convertGifsToVideos() {
  console.log('Starting GIF to video conversion...');

  for (const file of gifFiles) {
    const filePath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, `${path.parse(file).name}.mp4`);
    const outputWebmPath = path.join(assetsDir, `${path.parse(file).name}.webm`);

    // Skip if video version already exists
    if (fs.existsSync(outputPath) && fs.existsSync(outputWebmPath)) {
      console.log(`Skipping ${file} - Video versions already exist`);
      continue;
    }

    console.log(`Converting ${file} to MP4 and WebM...`);

    try {
      // Convert to MP4
      await execPromise(`ffmpeg -i "${filePath}" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "${outputPath}"`);

      // Convert to WebM
      await execPromise(`ffmpeg -i "${filePath}" -c:v libvpx-vp9 -b:v 0.5M "${outputWebmPath}"`);

      console.log(`Successfully converted ${file} to videos`);

      // Get file sizes for comparison
      const originalSize = fs.statSync(filePath).size;
      const mp4Size = fs.statSync(outputPath).size;
      const webmSize = fs.statSync(outputWebmPath).size;

      const mp4Savings = ((originalSize - mp4Size) / originalSize * 100).toFixed(2);
      const webmSavings = ((originalSize - webmSize) / originalSize * 100).toFixed(2);

      console.log(`Size comparison:`);
      console.log(`Original: ${(originalSize / 1024).toFixed(2)}KB`);
      console.log(`MP4: ${(mp4Size / 1024).toFixed(2)}KB (${mp4Savings}% smaller)`);
      console.log(`WebM: ${(webmSize / 1024).toFixed(2)}KB (${webmSavings}% smaller)`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }

  console.log('GIF to video conversion completed');
}

convertGifsToVideos().catch(console.error);
