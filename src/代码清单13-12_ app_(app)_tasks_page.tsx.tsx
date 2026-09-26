import Link from 'next/link';
import { fetchTasks } from '@/lib/data';

const statusText: Record<'todo' | 'in-progress' | 'done', string> = {
  'todo': '待办',
  'in-progress': '进行中',
  'done': '已完成',
};

export default async function TasksPage() {
  const tasks = await fetchTasks();
  return (
    <div>
      <h1 style={{ fontSize: 20, margin: '0 0 16px' }}>任务列表</h1>
      <div style={{ display: 'grid', gap: 12 }}>
        {tasks.map((task) => (
          // 关键改动：任务卡用 Link 软导航，会被 @modal/(.)tasks/[taskId] 拦截进模态；
          // 直接输入 URL 或按 F5 刷新属硬导航，不触发拦截，落到 tasks/[taskId]/page.tsx 详情页
          <Link
            key={task.id}
            href={`/tasks/${task.id}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: 10,
              padding: '14px 16px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <strong style={{ fontSize: 15 }}>{task.title}</strong>
            <span style={{ fontSize: 13, color: '#6b7280' }}>{statusText[task.status]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}