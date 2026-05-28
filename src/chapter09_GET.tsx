// 从第 9 章提取
// 代码清单: API 路由 GET 处理器
// 文件名: chapter09_GET.tsx
// ✅ 正确：在 API 路由中使用服务端密钥
// app/api/external/route.ts
export async function GET() {
  const apiKey = process.env.EXTERNAL_API_KEY; // 服务端变量，安全

  const response = await fetch('https://api.example.com/data', {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  });

  return Response.json(await response.json());
}
