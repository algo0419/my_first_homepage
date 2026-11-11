import { createRequire } from "node:module";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

// Next already pins Sharp; use the same encoder as the application's build.
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const root = path.resolve("public");
const objects = [
  "mechanical-star",
  "angular-prism",
  "checker-chair",
  "folded-guitar",
  "signal-monitor",
  "exploded-book",
  "folded-piano",
  "yellow-megaphone",
  "prism-camera",
  "chrome-cursor",
  "checker-stairs",
  "zigzag-pencil",
  "glass-dice",
  "floppy-totem",
  "pixel-hourglass",
  "folded-plane",
];
const inputs = [
  ...objects.map((name) => ({
    name,
    source: `generated/${name}.png`,
    sizes: [160, 320, 640],
  })),
  {
    name: "studio-diorama",
    source: "generated/studio-diorama.png",
    sizes: [640, 1280],
  },
  ...["stage", "city", "night"].map((name) => ({
    name: `portrait-${name}`,
    source: `portraits/portrait-${name}.jpg`,
    sizes: [480, 960],
  })),
];
await mkdir(path.join(root, "media"), { recursive: true });
let originalBytes = 0;
let largestVariantBytes = 0;
for (const input of inputs) {
  const source = path.join(root, input.source);
  originalBytes += (await stat(source)).size;
  for (const size of input.sizes) {
    const output = path.join(root, "media", `${input.name}-${size}.webp`);
    await sharp(source)
      .rotate()
      .resize({ width: size, withoutEnlargement: true })
      .webp({ quality: 80, alphaQuality: 90, effort: 6 })
      .toFile(output);
    if (size === input.sizes.at(-1))
      largestVariantBytes += (await stat(output)).size;
  }
}
console.log(
  JSON.stringify(
    {
      images: inputs.length,
      originalBytes,
      largestVariantBytes,
      reduction: `${(100 * (1 - largestVariantBytes / originalBytes)).toFixed(1)}%`,
    },
    null,
    2,
  ),
);
