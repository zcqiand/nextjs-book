// app/(app)/tasks/[taskId]/page.tsx
export function generateStaticParams() {
  // 返回所有需要预渲染的参数组合
  return [
    { taskId: '101' },
    { taskId: '102' },
    { taskId: '103' },
  ];
}

export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  // ...
}