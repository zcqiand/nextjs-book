// src/app/tasks/[id]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

const tasks: Record<string, { title: string; status: string; content: string }> = {
  '1': {
    title: '整理本周迭代需求',
    status: '进行中',
    content: '汇总三个小组的迭代需求，按优先级排入看板。',
  },
  '2': {
    title: '评审登录页设计稿',
    status: '待开始',
    content: '与设计团队确认登录页的交互细节与视觉稿。',
  },
  '3': {
    title: '修复看板拖拽偶发失效',
    status: '已完成',
    content: '定位拖拽事件偶发丢失的原因，并补充回归测试。',
  },
};

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = tasks[id];

  if (!task) {
    notFound();
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <Link href="/tasks" style={{ color: '#0070f3', textDecoration: 'none' }}>
        ← 返回任务列表
      </Link>

      <article style={{ marginTop: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{task.title}</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>{task.status}</p>
        <div style={{ lineHeight: 1.8, fontSize: '1.125rem' }}>{task.content}</div>
      </article>
    </main>
  );
}