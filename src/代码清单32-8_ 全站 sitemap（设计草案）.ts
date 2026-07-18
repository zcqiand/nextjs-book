import type { MetadataRoute } from "next";
import { db } from "@/db";
import { contracts } from "@/db/schema";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://lab.example.com";
  const rows = db.select({ id: contracts.id, updatedAt: contracts.updatedAt }).from(contracts).all();
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/login`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...rows.map((r) => ({
      url: `${base}/contracts/${r.id}`,
      lastModified: r.updatedAt,
      changeFrequency: "weekly",
      priority: 0.6,
    })),
  ];
}