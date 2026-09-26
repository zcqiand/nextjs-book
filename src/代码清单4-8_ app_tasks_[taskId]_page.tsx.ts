// app/tasks/[taskId]/page.tsx
// 15 起 params 为 Promise，需要 await；可以在每个 fetch 调用时指定不同的缓存策略
export default async function TaskDetail({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;

  const task = await fetchTask(taskId, {
    next: { revalidate: 60 },  // 这个 fetch 的缓存策略
  });

  const member = await fetchMember(task.assigneeId, {
    next: { revalidate: 3600 },  // 另一个 fetch 的缓存策略
  });

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{member.name}</p>
    </div>
  );
}