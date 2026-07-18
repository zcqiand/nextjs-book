// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1, // 只追踪 10% 的请求以控制成本
  environment: process.env.NODE_ENV,
  // 设置用户上下文（登录用户信息）
  beforeSend(event) {
    if (event.user) {
      // 隐藏敏感信息
      delete event.user.email;
      delete event.user.username;
    }
    return event;
  },
});