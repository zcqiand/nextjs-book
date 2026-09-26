import Link from 'next/link';
import { getTasks, type Task } from '@/lib/task-service';
const STATUS_META: Record<Task['status'], { label: string; badge: string }> = {
  todo: { label: '待办', badge: 'bg-gray-100 text-gray-700' },
  doing: { label: '进行中', badge: 'bg-blue-100 text-blue-700' },
  done: { label: '已完成', badge: 'bg-green-100 text-green-700' },
};
// async 服务端组件直接 await 数据，是 Next.js 15 App Router 的推荐写法
export default async function TasksPage() {
  const tasks = await getTasks(); // pending 的 1.5s 由同段 loading.js 接管
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">团队任务看板</h1>
      <p className="text-sm text-gray-500">数据来自慢接口（约 1.5 秒），首次进入会先看到骨架屏。</p>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="rounded-lg border p-4">
            <Link href={`/tasks/${task.id}`} className="font-medium hover:underline">{task.title}</Link>
            <span className={`ml-3 rounded-full px-2 py-0.5 text-xs ${STATUS_META[task.status].badge}`}>{STATUS_META[task.status].label}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}