import type { MetadataRoute } from "next";

const baseUrl = "https://agent.nicolae-valentin-dinca.net";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
