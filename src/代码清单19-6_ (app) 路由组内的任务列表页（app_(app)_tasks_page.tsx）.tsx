// app/(app)/tasks/page.tsx
// 路由组 (app) 只影响目录组织不影响 URL：本页的访问地址仍是 /tasks

import TaskFilter from '@/components/TaskFilter';
import { getTasksForRender } from '@/lib/prefetch';
import type { Task } from '@/lib/data';

const STATUS_LABELS: Record<Task['status'], string> = {
  todo: '待办',
  'in-progress': '进行中',
  done: '已完成',
};

export default async function TasksPage() {
  // 服务端路径：渲染期预获取；组件树里任何位置再次调用都会命中请求内去重
  const tasks = await getTasksForRender();

  return (
    <main>
      <h1>任务看板</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}（{STATUS_LABELS[task.status]}）
          </li>
        ))}
      </ul>

      {/* 客户端路径：筛选器在浏览器里按需取数，两条路径在同一页面并存 */}
      <TaskFilter />
    </main>
  );
}