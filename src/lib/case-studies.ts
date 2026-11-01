import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface CaseStudyMeta {
  title: string;
  description: string;
  date?: string;
  client?: string;
  [key: string]: unknown;
}

export interface CaseStudy {
  slug: string;
  meta: CaseStudyMeta;
  content: string;
}

const caseStudiesDirectory = path.join(process.cwd(), "content", "case-studies");

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(caseStudiesDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const filePath = path.join(caseStudiesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    meta: data as CaseStudyMeta,
    content,
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  return getCaseStudySlugs()
    .map((slug) => getCaseStudy(slug))
    .filter((study): study is CaseStudy => study !== null);
}
