// 从第 35 章提取
// 代码清单: Client Component 标记
// 文件名: chapter35_Error.tsx
// app/blog/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
      <h2 className="text-lg font-semibold text-red-600">出错了</h2>
      <p className="text-red-500">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        重试
      </button>
    </div>
  );
}
