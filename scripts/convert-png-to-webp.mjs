import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const repoRoot = process.cwd();
const imagesDir = path.join(repoRoot, "public", "images");

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function shouldRegenerate(srcPath, dstPath) {
  if (!(await fileExists(dstPath))) return true;
  const [srcStat, dstStat] = await Promise.all([fs.stat(srcPath), fs.stat(dstPath)]);
  return srcStat.mtimeMs > dstStat.mtimeMs;
}

async function main() {
  const entries = await fs.readdir(imagesDir, { withFileTypes: true });
  const pngFiles = entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".png"))
    .map((e) => e.name);

  if (pngFiles.length === 0) {
    console.log("No PNG files found in public/images.");
    return;
  }

  let converted = 0;
  let skipped = 0;

  for (const fileName of pngFiles) {
    const srcPath = path.join(imagesDir, fileName);
    const dstPath = path.join(imagesDir, fileName.replace(/\.png$/i, ".webp"));

    if (!(await shouldRegenerate(srcPath, dstPath))) {
      skipped++;
      continue;
    }

    const pipeline = sharp(srcPath, { failOn: "none" });
    const meta = await pipeline.metadata();

    await pipeline
      .webp({
        quality: 82,
        alphaQuality: meta.hasAlpha ? 90 : undefined,
        effort: 6,
      })
      .toFile(dstPath);

    converted++;
  }

  console.log(`Converted: ${converted}, skipped: ${skipped}`);
}

await main();
