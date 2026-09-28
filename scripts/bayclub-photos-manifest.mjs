// Lists assets/partners/bayclub/photos into manifest.json for the Bay Club partner kit page.
// Runs on every Vercel deploy (see buildCommand in vercel.json). No dependencies.
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = "assets/partners/bayclub/photos";
const photos = readdirSync(dir)
  .filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f) && !f.startsWith("."))
  .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
  .map((file) => ({ file, bytes: statSync(join(dir, file)).size }));

writeFileSync(join(dir, "manifest.json"), JSON.stringify({ photos }, null, 2) + "\n");
console.log(`bayclub photos manifest: ${photos.length} image(s)`);
