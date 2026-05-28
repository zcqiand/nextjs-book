// 从第 26 章提取
// 代码清单: src/lib/rate-limit.ts
// 文件名: chapter26_checkRateLimit.tsx
// src/lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 次每分钟
  analytics: true,
});

export async function checkRateLimit(identifier: string) {
  const { success, remaining, reset } = await ratelimit.limit(identifier);

  if (!success) {
    return {
      allowed: false,
      remaining: 0,
      reset: reset,
      message: '请求过于频繁，请稍后再试',
    };
  }

  return { allowed: true, remaining, reset };
}
