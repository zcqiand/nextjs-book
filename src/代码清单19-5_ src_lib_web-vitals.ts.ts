// src/lib/web-vitals.ts
export function reportWebVitals({ name, delta, id, value }: NextWebVitalsMetric) {
  // 发送到你的分析服务
  navigator.sendBeacon('/api/vitals', JSON.stringify({
    name,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    delta: Math.round(name === 'CLS' ? delta * 1000 : delta),
    id,
    timestamp: Date.now(),
  }));
}