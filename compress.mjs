import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      
      // We will save to a temporary file, then overwrite the original completely preserving the extension!
      // This is the safest way to reduce size without breaking ANY paths.
      // We will actually output WEBP format directly into the .png / .jpg file!
      const tempPath = fullPath + '.tmp';
      
      try {
        const image = sharp(fullPath);
        const metadata = await image.metadata();
        
        let operation = image;
        
        if (metadata.width > 1920) {
          operation = operation.resize(1920, null, { withoutEnlargement: true });
        }
        
        // Convert to webp to save maximum space, even if extension is png/jpg
        await operation.webp({ quality: 75 }).toFile(tempPath);
        
        // Replace original
        fs.renameSync(tempPath, fullPath);
        console.log(`Compressed: ${fullPath}`);
      } catch (e) {
        console.error(`Failed to process ${fullPath}:`, e);
      }
    }
  }
}

processDirectory(publicDir).then(() => console.log('Done!'));
