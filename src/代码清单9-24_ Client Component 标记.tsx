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