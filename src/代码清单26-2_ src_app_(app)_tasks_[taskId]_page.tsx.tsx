import { notFound } from "next/navigation";
import { getTaskById } from "@/lib/task-service";

// Next.js 15 起 params 是 Promise，必须 await 后才能读到路由参数
export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  // 路由参数恒为 string，种子 id 是 number，需显式转换；no-such-task 转成 NaN，查询同样落空
  const task = await getTaskById(Number(taskId));

  // 查询不到时立即中断渲染，交给最近的 not-found.tsx 兜底
  if (!task) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold text-slate-800">{task.title}</h1>
      <p className="mt-2 text-slate-500">负责人：{task.assignee}</p>
    </main>
  );
}