// 从第 30 章提取
// 代码清单: app/sitemap.ts
// 文件名: chapter30_sitemap.tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';

const locales = ['en', 'zh-CN', 'ja', 'ar'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com';

  const staticPages = locales.flatMap((locale) => ({
    url: `${baseUrl}/${locale === 'zh-CN' ? '' : locale}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: locale === 'zh-CN' ? 1 : 0.8,
  }));

  return [...staticPages];
}
