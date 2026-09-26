import { getTaskById, fetchComments } from '@/lib/data';
import CommentList from './comment-list';

const statusText: Record<'todo' | 'in-progress' | 'done', string> = {
  'todo': '待办',
  'in-progress': '进行中',
  'done': '已完成',
};

// async Server Component：初始数据在服务端取好，客户端组件只负责交互与乐观渲染
export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ taskId: string }>; // Next.js 15：params 是 Promise，必须 await，不做同步解构
}) {
  const { taskId } = await params;
  const task = await getTaskById(taskId);

  // 数据可能取不到（id 写错、任务已删除），服务端先兜底，避免把 undefined 传进子组件
  if (!task) {
    return <p style={{ color: '#6b7280' }}>任务不存在</p>;
  }

  const initialComments = await fetchComments(taskId);

  return (
    <div>
      <h1 style={{ fontSize: 20, margin: '0 0 8px' }}>{task.title}</h1>
      <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 16px' }}>
        状态：{statusText[task.status]} · 更新时间：
        {new Date(task.updatedAt).toLocaleString('zh-CN')}
      </p>
      <CommentList taskId={taskId} initialComments={initialComments} />
    </div>
  );
}