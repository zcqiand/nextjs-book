// src/app/(app)/boards/[boardId]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

const boards = {
  'design-refresh': {
    name: '官网改版',
    status: '进行中',
    dueDate: '2026-06-30',
    tasks: [
      { id: '101', title: '新版首页视觉稿', done: true },
      { id: '102', title: '导航信息架构梳理', done: false },
      { id: '103', title: '落地页文案重写', done: false },
    ],
  },
  'mobile-app': {
    name: '移动端适配',
    status: '进行中',
    dueDate: '2026-07-15',
    tasks: [
      { id: '201', title: '看板页窄屏布局', done: false },
      { id: '202', title: '任务卡片堆叠样式', done: false },
    ],
  },
  'content-launch': {
    name: '内容上线',
    status: '规划中',
    dueDate: '2026-08-01',
    tasks: [
      { id: '301', title: '帮助文档大纲', done: false },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(boards).map((boardId) => ({
    boardId,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) {
  const { boardId } = await params;
  const board = boards[boardId as keyof typeof boards];

  if (!board) {
    return { title: '看板未找到' };
  }

  return {
    title: `${board.name} - taskflow-board`,
    description: `状态：${board.status}，截止：${board.dueDate}`,
  };
}

export default async function BoardPage({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) {
  const { boardId } = await params;
  const board = boards[boardId as keyof typeof boards];

  if (!board) {
    notFound();
  }

  return (
    <article>
      <Link
        href="/boards"
        style={{
          display: 'inline-block',
          marginBottom: '1rem',
          color: '#0070f3',
          textDecoration: 'none',
          fontSize: '0.875rem'
        }}
      >
        ← 返回看板列表
      </Link>

      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{board.name}</h1>
      <div style={{ marginBottom: '1.5rem', color: '#666', fontSize: '0.875rem' }}>
        <span>状态: {board.status}</span>
        <span style={{ margin: '0 1rem' }}>·</span>
        <span>截止日期: {board.dueDate}</span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
        {board.tasks.map((task) => (
          <li key={task.id}>
            {task.title}（{task.done ? '已完成' : '进行中'}）
          </li>
        ))}
      </ul>
    </article>
  );
}