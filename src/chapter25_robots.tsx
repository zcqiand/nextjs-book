// 从第 25 章提取
// 代码清单: app/robots.ts
// 文件名: chapter25_robots.tsx
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://example.com/sitemap.xml',
    host: 'https://example.com',
  };
}
