import { fetchTasks } from '@/lib/data';

export default async function ActivityPanel() {
  const tasks = await fetchTasks();
  // updatedAt 是 ISO 8601 字符串，字典序即时间序，字符串比较即可完成排序
  const recentTasks = [...tasks]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 5);

  return (
    <section>
      <h2 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 600 }}>最近动态</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
        {recentTasks.map((task) => (
          <li key={task.id} style={{ fontSize: 14 }}>
            <div>{task.title}</div>
            <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>
              {new Date(task.updatedAt).toLocaleString('zh-CN')}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}