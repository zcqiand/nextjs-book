// 从第 7 章提取
// 代码清单: API 路由 GET 处理器
// 文件名: chapter07_GET_2.tsx
// app/api/search/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  const results = await search(query);
  return Response.json(results);
}
