import type { MetadataRoute } from "next";
import { BLOG_INDEX } from "@/content/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = BLOG_INDEX.map((post) => {
    const isFeaturedSeo = post.id.startsWith("seo-2026-");
    return {
      url: `https://samanthasaurino.com/blog/${post.slug}/`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: isFeaturedSeo ? "weekly" : "monthly",
      priority: isFeaturedSeo ? 0.9 : 0.7,
    };
  });

  return [
    {
      url: "https://samanthasaurino.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://samanthasaurino.com/blog/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogEntries,
    {
      url: "https://samanthasaurino.com/aviso-legal/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://samanthasaurino.com/politica-de-privacidad/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://samanthasaurino.com/politica-de-cookies/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
