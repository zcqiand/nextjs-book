import { Suspense } from 'react';
import Link from 'next/link';
import { getTasks, type Task } from '@/lib/task-service';
import ActivityFeed, { ActivityFeedSkeleton } from './activity-feed';
const STATUS_META: Record<Task['status'], { label: string; badge: string }> = {
  todo: { label: '待办', badge: 'bg-gray-100 text-gray-700' },
  doing: { label: '进行中', badge: 'bg-blue-100 text-blue-700' },
  done: { label: '已完成', badge: 'bg-green-100 text-green-700' },
};
export default async function TasksPage() {
  const tasks = await getTasks();
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">团队任务看板</h1>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="rounded-lg border p-4">
            <Link href={`/tasks/${task.id}`} className="font-medium hover:underline">{task.title}</Link>
            <span className={`ml-3 rounded-full px-2 py-0.5 text-xs ${STATUS_META[task.status].badge}`}>{STATUS_META[task.status].label}</span>
          </li>
        ))}
      </ul>
      {/* 粒度差异：loading.js 是段级边界（整段 pending 才触发）；Suspense 是模块级边界（仅 ActivityFeed pending 时回退，列表先到先渲染） */}
      <Suspense fallback={<ActivityFeedSkeleton />}><ActivityFeed /></Suspense>
    </main>
  );
}