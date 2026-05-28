// 从第 9 章提取
// 代码清单: Client Component 标记
// 文件名: chapter09_ExternalData.tsx
// ❌ 错误：不要在客户端代码中使用密钥
// app/components/ExternalData.tsx
'use client';

export default function ExternalData() {
  // 这个密钥会被暴露在客户端 JavaScript 中！
  const apiKey = 'sk_live_1234567890';

  fetch('https://api.example.com/data', {
    headers: { 'Authorization': `Bearer ${apiKey}` },
  });
}
