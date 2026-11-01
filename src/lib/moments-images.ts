import fs from "fs";
import path from "path";
import type { MomentImage } from "@/lib/data/career-highlights";

function humanizeMomentFilename(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export type { MomentImage };

export function getMomentsImages(): MomentImage[] {
  const dir = path.join(process.cwd(), "public", "moments");

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|webp|jfif|gif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
    .map((f) => ({
      src: `/moments/${encodeURIComponent(f)}`,
      alt: humanizeMomentFilename(f),
      filename: f,
    }));
}
