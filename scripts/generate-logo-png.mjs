
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const inputPath = join(root, "public", "logo.svg");
const outputPath = join(root, "public", "logo.png");

const WIDTH = 1200;
const HEIGHT = 630;

const svg = readFileSync(inputPath);

await sharp(svg, { density: 300 })
  .resize(WIDTH, HEIGHT, {
    fit: "contain",
    position: "centre",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

console.log(`Wrote ${outputPath} (${WIDTH}×${HEIGHT}, contain)`);
