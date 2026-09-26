import { notFound, redirect } from "next/navigation";
import { getTaskById } from "@/lib/task-service";

// 模拟会话：真实项目中该值取自登录态，这里用常量代替鉴权库
const CURRENT_USER_ID = "u-001";

export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  // 路由参数恒为 string，种子 id 是 number，需显式转换；no-such-task 转成 NaN，查询同样落空
  const task = await getTaskById(Number(taskId));

  // 资源不存在走 404，无权访问走 403 语义，两条路径保持分离
  if (!task) {
    notFound();
  }
  if (task.ownerId !== CURRENT_USER_ID) {
    redirect("/tasks/access-denied");
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold text-slate-800">{task.title}</h1>
      <p className="mt-2 text-slate-500">负责人：{task.assignee}</p>
    </main>
  );
}