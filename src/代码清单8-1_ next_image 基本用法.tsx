// src/app/tasks/[id]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';

// 任务数据沿用第 7 章 7.4 迁移后详情页的内联写法：页内 Record 按 id 查找
const tasks: Record<string, { title: string; status: string }> = {
  '1': { title: '整理本周迭代需求', status: '进行中' },
  '2': { title: '评审登录页设计稿', status: '待开始' },
  '3': { title: '修复看板拖拽偶发失效', status: '已完成' },
};

// Next.js 15 里 params 是 Promise，页面组件要声明为 async 并 await 解包
export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = tasks[id];

  if (!task) {
    notFound(); // 任务不存在时渲染 not-found.tsx（第 6 章 6.3.15 节）
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      {/* width/height 写的是图片的原始宽高（对应 2:1 的封面图）。
          Next.js 靠这两个值提前算好占位空间，避免图片加载时把下面的文字顶下去 */}
      <Image
        src="/covers/task-101.png"
        alt={`任务「${task.title}」的封面配图`}
        width={1200}
        height={600}
        className="mb-6 w-full rounded-lg"
      />
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p className="mt-2 text-gray-500">状态：{task.status}</p>
    </main>
  );
}