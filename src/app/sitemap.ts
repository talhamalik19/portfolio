import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/lib/data/portfolio";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  if (!baseUrl) return [];
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    ...portfolioProjects.map((project) => ({
      url: `${baseUrl}/case-studies/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
