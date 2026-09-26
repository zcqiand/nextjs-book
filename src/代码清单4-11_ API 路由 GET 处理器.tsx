// app/api/tasks/route.ts
// 每个 HTTP 方法对应一个导出的函数
export async function GET() {
  const tasks = await getTasks();
  return Response.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();
  const task = await createTask(body);
  return Response.json(task, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await deleteTask(id);
  return new Response(null, { status: 204 });
}