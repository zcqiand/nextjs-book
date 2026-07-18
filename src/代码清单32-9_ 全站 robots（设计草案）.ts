import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/forbidden"] },
    ],
    sitemap: "https://lab.example.com/sitemap.xml",
  };
}