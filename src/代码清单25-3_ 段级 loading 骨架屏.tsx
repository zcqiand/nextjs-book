// loading.tsx 是 Next.js（15.x 约定）特殊文件：会被自动包进本段 <Suspense>，段内数据 pending 时展示
export default function Loading() {
  // 骨架形状尽量贴近真实内容，替换时不跳动
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-6">
      <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-16 animate-pulse rounded-lg border bg-gray-100" />
      ))}
    </main>
  );
}