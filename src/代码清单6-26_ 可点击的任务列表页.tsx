// src/app/tasks/page.tsx
import Link from 'next/link';

const tasks = [
  { id: '1', title: '整理本周迭代需求', status: '进行中' },
  { id: '2', title: '评审登录页设计稿', status: '待开始' },
  { id: '3', title: '修复看板拖拽偶发失效', status: '已完成' },
];

export default function TaskListPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>任务列表</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {tasks.map((task) => (
          <Link
            key={task.id}
            href={`/tasks/${task.id}`}
            style={{
              border: '1px solid #eee',
              borderRadius: '8px',
              padding: '1.25rem',
              textDecoration: 'none',
              color: '#333',
            }}
          >
            <strong>{task.title}</strong>
            <span style={{ float: 'right', color: '#0070f3' }}>{task.status}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}