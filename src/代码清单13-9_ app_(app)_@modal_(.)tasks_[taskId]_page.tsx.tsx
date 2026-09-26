import { getTaskById } from '@/lib/data';
import TaskModal from './task-modal';

// Server Component 外壳：只负责取数与组装，onClick 等事件交互全部放在 TaskModal 里
export default async function InterceptedTaskModalPage({
  params,
}: {
  params: Promise<{ taskId: string }>; // Next.js 15：params 是 Promise，必须 await，不做同步解构
}) {
  const { taskId } = await params;
  const task = await getTaskById(taskId);
  if (!task) {
    return null; // 拦截场景取不到数据就不渲染模态，完整兜底由详情页负责
  }
  return <TaskModal title={task.title} status={task.status} updatedAt={task.updatedAt} />;
}