// app/api/tasks/route.ts
export async function GET() {
  const tasks = await getTasks();
  return Response.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();
  const task = await createTask(body);
  return Response.json(task);
}