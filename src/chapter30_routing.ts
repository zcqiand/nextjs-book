// 从第 30 章提取
// 代码清单: src/i18n/routing.ts
// 文件名: chapter30_routing.ts
// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh-CN', 'ja', 'ar'],
  defaultLocale: 'zh-CN',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/blog': '/blog',
    '/about': {
      en: '/about',
      'zh-CN': '/about',
      ja: '/about',
      ar: '/about',
    },
  },
});
