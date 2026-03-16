import type { MetadataRoute } from "next";

const baseUrl = "https://agent.nicolae-valentin-dinca.net";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
