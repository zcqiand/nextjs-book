// src/lib/rate-limiter.ts
const RATE_LIMIT_WINDOW = 60000; // 1 分钟
const MAX_REQUESTS = 20;

const requests = new Map<string, number[]>();

export function checkRateLimit(userId: string): boolean {
  const now = Date.now();
  const userRequests = requests.get(userId) || [];

  // 过滤掉窗口外的请求
  const recentRequests = userRequests.filter(
    (time) => now - time < RATE_LIMIT_WINDOW
  );

  if (recentRequests.length >= MAX_REQUESTS) {
    return false; // 超限
  }

  recentRequests.push(now);
  requests.set(userId, recentRequests);
  return true;
}