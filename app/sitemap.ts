import type { MetadataRoute } from "next";
import { essays, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${site.url}/work/aida`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
      lastModified: new Date(),
    },
    ...essays.map((essay) => ({
      url: `${site.url}/writing/${essay.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      lastModified: new Date(essay.date),
    })),
  ];
}
