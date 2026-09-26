import { getTasks, type Task } from '@/lib/task-service';

// force-dynamic 让页面退出 Full Route Cache（每次请求都重新渲染）。
// 这是刻意的取舍：若页面在构建时被静态预渲染，运行期两条日志都不会出现，Data Cache 无从观察
export const dynamic = 'force-dynamic';

const STATUS_META: Record<Task['status'], { label: string; badge: string }> = {
  todo: { label: '待办', badge: 'bg-gray-100 text-gray-700' },
  doing: { label: '进行中', badge: 'bg-blue-100 text-blue-700' },
  done: { label: '已完成', badge: 'bg-green-100 text-green-700' },
};

export default async function TasksPage() {
  // 同一次渲染里调用两次：真实网络请求只有一次，第二个返回值用不到，解构时故意丢弃
  const [tasks] = await Promise.all([getTasks(), getTasks()]);
  // 判据：两行 [task-service]、一行 [route]；为什么是这样，正文四步观察里推演
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">团队任务看板</h1>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="rounded-lg border p-4">
            <span className="font-medium">{task.title}</span>
            <span className={`ml-3 rounded-full px-2 py-0.5 text-xs ${STATUS_META[task.status].badge}`}>
              {STATUS_META[task.status].label}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}