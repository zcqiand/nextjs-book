// app/(app)/tasks/[taskId]/page.tsx
// 这个文件匹配 /tasks/* 的所有 URL

export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  // 根据 taskId 获取对应的任务内容
  const task = getTaskById(taskId);

  return <h1>{task.title}</h1>;
}