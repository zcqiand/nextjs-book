// 从第 32 章提取
// 代码清单: Client Component 标记
// 文件名: chapter32_Error.tsx
// app/blog/[slug]/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-red-600">加载失败</h2>
      <p className="text-gray-600 mt-2">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        重试
      </button>
    </div>
  );
}
