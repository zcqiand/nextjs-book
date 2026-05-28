// 从第 31 章提取
// 代码清单: src/lib/web-vitals.ts
// 文件名: chapter31_web-vitals.ts
// src/lib/web-vitals.ts
export function reportWebVitals({ name, delta, id, value }: NextWebVitalsMetric) {
  // 发送到你的监控服务
  if (name === 'LCP' && value > 2500) {
    console.warn(`LCP 超过 2.5s: ${value}ms`);
    // 发送告警
  }

  if (name === 'CLS' && value > 0.1) {
    console.warn(`CLS 超过 0.1: ${value}`);
    // 发送告警
  }
}
