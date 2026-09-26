// src/app/(app)/boards/[boardId]/tasks/page.tsx
import Link from 'next/link';

const boardTasks = {
  'design-refresh': [
    { id: '101', title: '新版首页视觉稿', dueDate: '2026-06-12' },
    { id: '102', title: '导航信息架构梳理', dueDate: '2026-06-15' },
  ],
  'mobile-app': [
    { id: '103', title: '任务卡片移动端布局', dueDate: '2026-06-22' },
  ],
};

export function generateStaticParams() {
  return Object.keys(boardTasks).map((boardId) => ({
    boardId,
  }));
}

export default async function BoardTasksPage({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) {
  const { boardId } = await params;
  const tasks = boardTasks[boardId as keyof typeof boardTasks] || [];

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <Link href={`/boards/${boardId}`} style={{ color: '#0070f3' }}>
        ← 返回看板主页
      </Link>

      <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>
        看板 {boardId} 的任务
      </h1>

      {tasks.length === 0 ? (
        <p style={{ color: '#666' }}>暂无任务</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: '1rem' }}>
              <h3 style={{ margin: '0 0 0.25rem' }}>{task.title}</h3>
              <span style={{ fontSize: '0.875rem', color: '#666' }}>
                {task.dueDate}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}