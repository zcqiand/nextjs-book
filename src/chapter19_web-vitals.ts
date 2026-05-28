// 从第 19 章提取
// 代码清单: src/lib/web-vitals.ts
// 文件名: chapter19_web-vitals.ts
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
