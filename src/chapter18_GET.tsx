// 从第 18 章提取
// 代码清单: API 路由 GET 处理器
// 文件名: chapter18_GET.tsx
// app/api/posts/route.ts
export async function GET(request: Request) {
  const cachedData = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 }, // 60 秒缓存
  });

  return Response.json(await cachedData.json());
}
