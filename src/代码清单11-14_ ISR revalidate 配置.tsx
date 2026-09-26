// app/(app)/tasks/[taskId]/page.tsx
export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  // 模拟数据获取
  const task = await getTask(taskId);

  return (
    <article>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </article>
  );
}

// 启用 ISR，60秒后重新验证
export const revalidate = 60;