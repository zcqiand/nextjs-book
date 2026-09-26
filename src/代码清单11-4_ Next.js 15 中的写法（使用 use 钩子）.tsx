// Next.js 15 中的写法（使用 use 钩子）
import { use } from 'react';

export default function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = use(params);

  return <h1>任务: {taskId}</h1>;
}