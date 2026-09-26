// src/app/(app)/boards/[boardId]/tasks/[taskId]/page.tsx
import Link from 'next/link';

const allTasks = {
  'design-refresh': {
    '101': { title: '新版首页视觉稿', description: '完成新版首页的高保真视觉稿。', dueDate: '2026-06-12' },
    '102': { title: '导航信息架构梳理', description: '梳理一级、二级导航的信息架构。', dueDate: '2026-06-15' },
  },
  'mobile-app': {
    '103': { title: '任务卡片移动端布局', description: '任务卡片在窄屏下的堆叠布局。', dueDate: '2026-06-22' },
  },
};

export function generateStaticParams() {
  const paths: { boardId: string; taskId: string }[] = [];

  for (const boardId of Object.keys(allTasks)) {
    for (const taskId of Object.keys(allTasks[boardId as keyof typeof allTasks])) {
      paths.push({ boardId, taskId });
    }
  }

  return paths;
}

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ boardId: string; taskId: string }>;
}) {
  const { boardId, taskId } = await params;
  const boardTasks = allTasks[boardId as keyof typeof allTasks];
  const task = boardTasks?.[taskId as keyof typeof boardTasks];

  if (!task) {
    return <div>任务不存在</div>;
  }

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <Link
        href={`/boards/${boardId}/tasks`}
        style={{ color: '#0070f3' }}
      >
        ← 返回任务列表
      </Link>

      <h1 style={{ fontSize: '2rem', margin: '1.5rem 0 0.5rem' }}>
        {task.title}
      </h1>

      <p style={{ color: '#666', marginBottom: '1.5rem' }}>{task.dueDate}</p>

      <div style={{ lineHeight: 1.8 }}>{task.description}</div>
    </main>
  );
}