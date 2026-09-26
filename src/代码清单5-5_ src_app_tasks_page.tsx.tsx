// src/app/tasks/page.tsx
const tasks = [
  { id: 1, title: '整理本周迭代需求', status: '进行中' },
  { id: 2, title: '评审登录页设计稿', status: '待开始' },
  { id: 3, title: '修复看板拖拽偶发失效', status: '已完成' },
];

export default function TaskListPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>任务列表</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ padding: '1rem', borderBottom: '1px solid #eee' }}
          >
            <span style={{ marginRight: '1rem', color: '#666' }}>#{task.id}</span>
            {task.title}
            <span style={{ float: 'right', color: '#0070f3' }}>{task.status}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}