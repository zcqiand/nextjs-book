// 从第 30 章提取
// 代码清单: src/i18n/request.ts
// 文件名: chapter30_request.ts
// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // 验证 locale
  if (!locale || !['en', 'zh-CN', 'ja', 'ar'].includes(locale)) {
    locale = 'zh-CN';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
