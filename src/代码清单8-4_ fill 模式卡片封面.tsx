// src/app/components/task-card.tsx
import Image from 'next/image';

// Task 类型在本文件内定义：沿第 7 章详情页的 title/status，另补 id 与
// coverUrl 字段（coverUrl 的值是 public/ 下的图片路径，如 /covers/task-101.png）
type Task = { id: string; title: string; status: string; coverUrl: string };

export function TaskCard({ task }: { task: Task }) {
  return (
    <div className="rounded-lg border p-4">
      {/* fill 模式下图片不再自带宽高，而是铺满父容器，所以父容器必须
          同时满足两点：position: relative（fill 依赖它定位）
          和确定的高度（aspect-video 用 16:9 比例撑出高度）。
          overflow-hidden 配合圆角，把超出容器的部分裁掉 */}
      <div className="relative mb-3 aspect-video overflow-hidden rounded-md">
        <Image
          src={task.coverUrl}
          alt={`任务「${task.title}」的封面图`}
          fill
          className="object-cover"
          // object-cover 让图片等比缩放后居中裁切，避免拉伸变形
        />
      </div>
      <h2 className="font-medium">{task.title}</h2>
      <span className="text-sm text-gray-500">{task.status}</span>
    </div>
  );
}