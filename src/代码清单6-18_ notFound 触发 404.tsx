import { notFound } from 'next/navigation';

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // params 是 Promise，先 await 解包（见 5.2.3 节）
  const { id } = await params;
  const task = getTask(id);

  if (!task) {
    notFound(); // 渲染 not-found.tsx
  }

  return <main>{task.title}</main>;
}