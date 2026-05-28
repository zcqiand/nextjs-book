// 从第 31 章提取
// 代码清单: sentry.client.config.ts
// 文件名: chapter31_sentry_client.ts
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1, // 采样 10% 的请求
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
