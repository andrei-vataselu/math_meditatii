/**
 * Rasterize public/logo.svg → PNG + ICO favicons for OG/Twitter and Google SERP.
 * Google often ignores SVG favicons in search; PNG/ICO at stable URLs fixes that.
 * Run via: npm run assets:logo (also chained in npm run build)
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const inputPath = join(root, "public", "logo.svg");
const svg = readFileSync(inputPath);

const sharpSvg = () => sharp(svg, { density: 300 });

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

await sharpSvg()
  .resize(OG_WIDTH, OG_HEIGHT, {
    fit: "contain",
    position: "centre",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9 })
  .toFile(join(root, "public", "logo.png"));
console.log(`Wrote public/logo.png (${OG_WIDTH}×${OG_HEIGHT}, contain)`);

const faviconSizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  faviconSizes.map(async (size) =>
    sharpSvg()
      .resize(size, size, {
        fit: "contain",
        position: "centre",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ compressionLevel: 9 })
      .toBuffer(),
  ),
);

const icoPath = join(root, "public", "favicon.ico");
const icoBuffer = await toIco(pngBuffers);
writeFileSync(icoPath, icoBuffer);
console.log(`Wrote ${icoPath} (${faviconSizes.join(", ")} px layers)`);

await sharpSvg()
  .resize(48, 48, {
    fit: "contain",
    position: "centre",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9 })
  .toFile(join(root, "public", "favicon-48x48.png"));
console.log("Wrote public/favicon-48x48.png");

await sharpSvg()
  .resize(180, 180, {
    fit: "contain",
    position: "centre",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9 })
  .toFile(join(root, "public", "apple-touch-icon.png"));
console.log("Wrote public/apple-touch-icon.png");
