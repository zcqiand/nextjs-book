// 从第 40 章提取
// 代码清单: API 路由 GET 处理器
// 文件名: chapter40_GET_2.tsx
// app/api/v1/users/route.ts
// 未来可以添加 v2, v3 等版本

export async function GET(request: Request) {
  // v1 逻辑
  return Response.json({ version: 'v1', data: [] });
}

// app/api/v2/users/route.ts
export async function GET(request: Request) {
  // v2 逻辑，可能有breaking changes
  return Response.json({ version: 'v2', data: [] });
}
