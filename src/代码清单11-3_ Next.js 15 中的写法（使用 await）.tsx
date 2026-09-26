// Next.js 15 中的写法（使用 await）
export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;

  return <h1>任务: {taskId}</h1>;
}