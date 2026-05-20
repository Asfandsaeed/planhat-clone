import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const assets = [
  // SEO / Favicons
  { url: "https://framerusercontent.com/images/Ryii4s5qcjHmFMxKyur3Yasiv8.png", dest: "public/seo/favicon-light.png" },
  { url: "https://framerusercontent.com/images/FzOwtYGb8lDLgTJJWTwcLl3edM.png", dest: "public/seo/favicon-dark.png" },
  { url: "https://framerusercontent.com/images/Z5mji5haekEFlBD0voWyUTQce6M.png", dest: "public/seo/apple-touch-icon.png" },
  { url: "https://framerusercontent.com/images/oT3xihzfqIdgj5LplXZhn8.png", dest: "public/seo/og-image.png" },
  // Hero image
  { url: "https://framerusercontent.com/images/ySowSd1AhLEKVSDhrToFAfbaI.webp", dest: "public/images/hero.webp" },
  // Content images
  { url: "https://framerusercontent.com/images/cRAToNktwFKQTeh7p7qjRgUF5Mk.webp", dest: "public/images/feature-1.webp" },
  { url: "https://framerusercontent.com/images/ysnqTOpX0p28tTJknbCpRrAac8.png", dest: "public/images/content-1.png" },
  { url: "https://framerusercontent.com/images/sGhv9CMqldewi84WhbbdCzyT7IA.png", dest: "public/images/content-2.png" },
  { url: "https://framerusercontent.com/images/00BPofPOirLlEIJgujthO1lDYk.png", dest: "public/images/feature-large-1.png" },
  { url: "https://framerusercontent.com/images/QT9xXlrI99u8Fx7uErSQMjDQvM.png", dest: "public/images/feature-large-2.png" },
  { url: "https://framerusercontent.com/images/TvBIo2XwtFa8Eq6R4VpScEZHiuE.png", dest: "public/images/feature-large-3.png" },
  { url: "https://framerusercontent.com/images/wXoBdlvdQg1qzEp7K7C5LKXNqo.png", dest: "public/images/feature-large-4.png" },
  { url: "https://framerusercontent.com/images/BDMvMjVv29J8itrPrRslNgJOQ4U.png", dest: "public/images/award-1.png" },
  { url: "https://framerusercontent.com/images/EIOYDRlCLEy43BV56tyqPml9Q.png", dest: "public/images/award-2.png" },
  { url: "https://framerusercontent.com/images/fSJHysbALvzXs9ic9nRrXvo.png", dest: "public/images/award-3.png" },
  { url: "https://framerusercontent.com/images/XJXqJnkbtOLrfaR43uKiGL6ADw.png", dest: "public/images/award-4.png" },
  { url: "https://framerusercontent.com/images/ANh90jOY9f6drfAhYxAWUm08U.png", dest: "public/images/logo-1.png" },
  { url: "https://framerusercontent.com/images/km014pjfYNmM3kmyAfQIdDUp9C8.png", dest: "public/images/logo-2.png" },
  { url: "https://framerusercontent.com/images/QQBoHtgqftjAGxX64Om2Ediavq0.png", dest: "public/images/logo-3.png" },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }
      response.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function main() {
  console.log("Downloading assets...\n");
  let success = 0, fail = 0;
  for (const asset of assets) {
    const destPath = path.join(rootDir, asset.dest);
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    try {
      await download(asset.url, destPath);
      console.log(`✓ ${path.basename(asset.dest)}`);
      success++;
    } catch (err) {
      console.error(`✗ ${path.basename(asset.dest)}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone. ${success} downloaded, ${fail} failed.`);
}

main();
