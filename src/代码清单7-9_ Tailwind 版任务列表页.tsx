// src/app/tasks/page.tsx
import Link from 'next/link';

const tasks = [
  { id: '1', title: '整理本周迭代需求', status: '进行中' },
  { id: '2', title: '评审登录页设计稿', status: '待开始' },
  { id: '3', title: '修复看板拖拽偶发失效', status: '已完成' },
];

// 徽标颜色集中成一张映射表，新增状态只改这一处
const badgeStyles: Record<string, string> = {
  进行中: 'bg-blue-100 text-blue-700',
  待开始: 'bg-amber-100 text-amber-700',
  已完成: 'bg-green-100 text-green-700',
};

export default function TaskListPage() {
  return (
    <main className="mx-auto max-w-[800px] px-4">
      <h1 className="mb-8 text-4xl font-bold">任务列表</h1>

      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <Link
            key={task.id}
            href={`/tasks/${task.id}`}
            className="flex items-center justify-between rounded-lg border border-gray-200 px-5 py-4 transition-colors hover:border-blue-400"
          >
            <strong className="text-gray-800">{task.title}</strong>
            <span className={`rounded-full px-3 py-1 text-sm ${badgeStyles[task.status]}`}>
              {task.status}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}