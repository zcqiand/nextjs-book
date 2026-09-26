// src/app/(app)/tasks/[taskId]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 模拟任务数据
const tasks = {
  '101': {
    title: '新版首页视觉稿',
    description: '完成新版首页的高保真视觉稿，需要覆盖深色模式下的所有状态。',
    assignee: '张三',
    dueDate: '2026-06-12',
    priority: '高',
  },
  '102': {
    title: '看板拖拽交互优化',
    description: '优化任务卡片在列间拖拽时的动画与落点判定。',
    assignee: '李四',
    dueDate: '2026-06-20',
    priority: '中',
  },
  '103': {
    title: '成员权限体系设计',
    description: '梳理管理员、成员、访客三种角色的读写权限边界。',
    assignee: '王五',
    dueDate: '2026-06-28',
    priority: '低',
  },
};

export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  const task = tasks[taskId as keyof typeof tasks];

  if (!task) {
    notFound();
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Link
        href="/boards"
        style={{
          display: 'inline-block',
          marginBottom: '1.5rem',
          color: '#0070f3',
          textDecoration: 'none',
        }}
      >
        ← 返回看板
      </Link>

      <article>
        <div style={{ marginBottom: '1rem' }}>
          <span style={{
            fontSize: '0.75rem',
            padding: '0.25rem 0.5rem',
            backgroundColor: '#e3f2fd',
            color: '#1976d2',
            borderRadius: '4px',
            marginRight: '0.5rem',
          }}>
            优先级: {task.priority}
          </span>
          <span style={{ fontSize: '0.875rem', color: '#666' }}>
            截止: {task.dueDate}
          </span>
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          {task.title}
        </h1>

        <div style={{
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #eee',
          color: '#666',
        }}>
          <span>负责人: {task.assignee}</span>
        </div>

        <div style={{ lineHeight: 1.8, fontSize: '1.125rem' }}>
          {task.description}
        </div>
      </article>
    </main>
  );
}