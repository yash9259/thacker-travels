import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();
const INPUT_DIRS = ["public", "src/assets"];
const SUPPORTED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

const getAllFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return getAllFiles(fullPath);
      }
      return fullPath;
    })
  );
  return files.flat();
};

const convertImage = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.has(ext)) {
    return;
  }

  const outputPath = filePath.replace(new RegExp(`${ext}$`, "i"), ".webp");
  await sharp(filePath)
    .webp({ quality: 80 })
    .toFile(outputPath);

  console.log(`Converted: ${path.relative(PROJECT_ROOT, filePath)} -> ${path.relative(PROJECT_ROOT, outputPath)}`);
};

const run = async () => {
  for (const dir of INPUT_DIRS) {
    const absoluteDir = path.join(PROJECT_ROOT, dir);
    const files = await getAllFiles(absoluteDir);
    for (const file of files) {
      await convertImage(file);
    }
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
