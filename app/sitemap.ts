import type { MetadataRoute } from "next";
import { essays, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...essays.map((essay) => ({
      url: `${site.url}/writing/${essay.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
