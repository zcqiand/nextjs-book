'use cache';
// 文件级声明：本文件的导出组件整体进入组件级缓存。
// import 必须写在指令之后，位置错了框架会直接报错

import { unstable_cacheTag } from 'next/cache';
import { getTasks, type Task, type TaskStatus } from '@/lib/task-service';

const CATEGORY_META: Record<TaskStatus, { label: string; badge: string }> = {
  todo: { label: '待办', badge: 'bg-gray-100 text-gray-700' },
  doing: { label: '进行中', badge: 'bg-blue-100 text-blue-700' },
  done: { label: '已完成', badge: 'bg-green-100 text-green-700' },
};

export default async function TaskCategoryList() {
  // 打上 tasks 标签：第 18 章的 revalidateTag('tasks') 可一键打穿这层缓存
  unstable_cacheTag('tasks');
  // 未调用 unstable_cacheLife：套 default profile（stale 5 分钟，观察窗口足够宽）

  const tasks = await getTasks();
  const countOf = (status: TaskStatus) =>
    tasks.filter((task: Task) => task.status === status).length;

  return (
    <section className="space-y-4">
      <nav className="flex gap-3">
        {(Object.keys(CATEGORY_META) as TaskStatus[]).map((status) => (
          <span
            key={status}
            className={`rounded-full px-3 py-1 text-sm ${CATEGORY_META[status].badge}`}
          >
            {CATEGORY_META[status].label} {countOf(status)}
          </span>
        ))}
      </nav>
      <ul className="space-y-3">
        {tasks.map((task: Task) => (
          <li key={task.id} className="rounded-lg border p-4">
            <span className="font-medium">{task.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}