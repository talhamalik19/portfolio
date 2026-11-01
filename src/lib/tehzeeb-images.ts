import fs from "fs";
import path from "path";

export type TehzeebImageCategory = "pizza" | "cake" | "pos" | "stock";

export type TehzeebImageSource = TehzeebImageCategory | "reports";

export interface TehzeebImage {
  src: string;
  alt: string;
}

function humanizeFilename(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getTehzeebImages(
  category: TehzeebImageCategory
): TehzeebImage[] {
  const dir = path.join(process.cwd(), "public", "tehzeeb", category);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
    .sort()
    .map((f) => ({
      src: `/tehzeeb/${category}/${encodeURIComponent(f)}`,
      alt: `Tehzeeb ${category} — ${humanizeFilename(f)}`,
    }));
}

const REPORT_FILENAMES = [
  "reports.png",
  "admin-reports.png",
  "user-reports.png",
];

export function getTehzeebReportImages(): TehzeebImage[] {
  const images: TehzeebImage[] = [];

  for (const category of ["pizza", "cake", "pos"] as TehzeebImageCategory[]) {
    const dir = path.join(process.cwd(), "public", "tehzeeb", category);
    if (!fs.existsSync(dir)) continue;

    for (const file of fs.readdirSync(dir)) {
      if (REPORT_FILENAMES.includes(file)) {
        images.push({
          src: `/tehzeeb/${category}/${file}`,
          alt: `Tehzeeb reports — ${humanizeFilename(file)}`,
        });
      }
    }
  }

  return images.sort((a, b) => a.src.localeCompare(b.src));
}

export function getTehzeebImagesBySources(
  sources: TehzeebImageSource[]
): TehzeebImage[] {
  const seen = new Set<string>();
  const images: TehzeebImage[] = [];

  for (const source of sources) {
    const batch =
      source === "reports" ? getTehzeebReportImages() : getTehzeebImages(source);

    for (const image of batch) {
      if (!seen.has(image.src)) {
        seen.add(image.src);
        images.push(image);
      }
    }
  }

  return images;
}

export function getAllTehzeebImages(): Record<
  TehzeebImageCategory,
  TehzeebImage[]
> {
  return {
    pizza: getTehzeebImages("pizza"),
    cake: getTehzeebImages("cake"),
    pos: getTehzeebImages("pos"),
    stock: getTehzeebImages("stock"),
  };
}
