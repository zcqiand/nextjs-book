// app/(app)/tasks/[status]/page.tsx
import { notFound } from 'next/navigation';

const statuses = {
  todo: {
    name: '待办',
    description: '还没开始的任务',
  },
  'in-progress': {
    name: '进行中',
    description: '正在推进的任务',
  },
  done: {
    name: '已完成',
    description: '已经交付的任务',
  },
};

export default async function StatusPage({
  params,
}: {
  params: Promise<{ status: string }>;
}) {
  const { status } = await params;
  const statusData = statuses[status as keyof typeof statuses];

  if (!statusData) {
    notFound();
  }

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
        {statusData.name}
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        {statusData.description}
      </p>

      <div style={{ color: '#999' }}>
        任务卡片列表将在此显示...
      </div>
    </div>
  );
}