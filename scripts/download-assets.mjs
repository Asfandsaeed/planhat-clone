#!/usr/bin/env node

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const ASSETS = [
  // Favicon / SEO
  {
    url: "https://framerusercontent.com/images/Ryii4s5qcjHmFMxKyur3Yasiv8.png",
    dest: "public/seo/favicon-light.png",
  },
  {
    url: "https://framerusercontent.com/images/FzOwtYGb8lDLgTJJWTwcLl3edM.png",
    dest: "public/seo/favicon-dark.png",
  },
  {
    url: "https://framerusercontent.com/images/Z5mji5haekEFlBD0voWyUTQce6M.png",
    dest: "public/seo/apple-touch-icon.png",
  },
  {
    url: "https://framerusercontent.com/images/oT3xihzfqIdgj5LplXZhn8.png",
    dest: "public/seo/og-image.png",
  },
  // Hero image
  {
    url: "https://framerusercontent.com/images/ySowSd1AhLEKVSDhrToFAfbaI.webp",
    dest: "public/images/hero.webp",
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(
            new Error(`Download failed: ${response.statusCode} for ${url}`)
          );
          return;
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`✓ ${path.basename(dest)}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

async function main() {
  console.log("Downloading assets...\n");
  for (const asset of ASSETS) {
    const destPath = path.join(rootDir, asset.dest);
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    try {
      await download(asset.url, destPath);
    } catch (err) {
      console.error(`✗ ${path.basename(asset.dest)}: ${err.message}`);
    }
  }
  console.log("\nDone.");
}

main();
