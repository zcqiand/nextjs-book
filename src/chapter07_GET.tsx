// 从第 7 章提取
// 代码清单: API 路由 GET 处理器
// 文件名: chapter07_GET.tsx
// app/api/users/route.ts
export async function GET() {
  const users = await prisma.user.findMany();

  return Response.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return Response.json(user);
}
