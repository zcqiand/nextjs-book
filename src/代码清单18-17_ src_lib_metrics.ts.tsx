// src/lib/metrics.ts
export async function recordPageView(page: string) {
  // 发送到你的分析服务
  await fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({
      event: 'page_view',
      page,
      timestamp: Date.now(),
    }),
  });
}

export async function recordApiLatency(
  endpoint: string,
  latencyMs: number
) {
  await fetch('/api/metrics', {
    method: 'POST',
    body: JSON.stringify({
      event: 'api_latency',
      endpoint,
      latencyMs,
      timestamp: Date.now(),
    }),
  });
}

export async function recordUserAction(
  userId: string,
  action: string,
  metadata?: Record<string, unknown>
) {
  await fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({
      event: 'user_action',
      userId,
      action,
      metadata,
      timestamp: Date.now(),
    }),
  });
}