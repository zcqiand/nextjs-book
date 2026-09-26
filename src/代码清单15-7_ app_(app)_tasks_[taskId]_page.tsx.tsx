// 口径说明：done 布尔沿用第 10 章看板详情用过的口径（lib/data.ts 的 Task 类型并无此字段，
// 你的任务数据里若没有 done，换成用 task.status 判断即可）。
// 页面本身不写任何指令，保持服务端组件，取数与 404 判断都在这里完成。
import { notFound } from "next/navigation";
import CompleteButton from "./complete-button";
import { getTaskById } from "@/lib/data";

interface TaskDetailPageProps {
  // Next.js 15 中 params 是 Promise，页面组件必须 await 解包（沿用第 14 章口径）
  params: Promise<{ taskId: string }>;
}

export default async function TaskDetailPage({ params }: TaskDetailPageProps) {
  const { taskId } = await params;
  const task = await getTaskById(taskId);

  // 找不到任务时直接渲染 404 页面，避免在 undefined 上继续取字段而崩溃
  if (!task) {
    notFound();
  }

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, marginBottom: 8 }}>{task.title}</h1>
      <p style={{ color: "#6b7280", marginBottom: 16 }}>状态：{task.status}</p>
      {/* 交互被下推到 CompleteButton：只传 taskId 与 done 这样的普通值 props，
         不传任何函数，序列化边界因此始终保持安全。 */}
      <CompleteButton taskId={task.id} done={task.done ?? false} />
    </main>
  );
}