// 从第 30 章提取
// 代码清单: middleware.ts
// 文件名: chapter30_middleware.ts
// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(en|zh-CN|ja|ar)/:path*']
};
