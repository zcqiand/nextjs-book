// src/app/(app)/boards/[boardId]/page.tsx
import Link from 'next/link';

const boards = {
  'design-refresh': { name: '官网改版', description: '官网视觉与信息架构全面改版', taskCount: 2 },
  'mobile-app': { name: '移动端适配', description: '核心页面适配移动端断点', taskCount: 1 },
};

export function generateStaticParams() {
  return Object.keys(boards).map((boardId) => ({
    boardId,
  }));
}

export default async function BoardPage({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) {
  const { boardId } = await params;
  const board = boards[boardId as keyof typeof boards];

  if (!board) {
    return <div>看板不存在</div>;
  }

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          {board.name}
        </h1>
        <p style={{ color: '#666' }}>{board.description}</p>
      </div>

      <div style={{
        padding: '1rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        marginBottom: '1.5rem',
      }}>
        <p>任务数量: {board.taskCount}</p>
      </div>

      <Link
        href={`/boards/${boardId}/tasks`}
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
        }}
      >
        查看所有任务
      </Link>
    </main>
  );
}