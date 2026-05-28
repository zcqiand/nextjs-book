// 从第 32 章提取
// 代码清单: Client Component 标记
// 文件名: chapter32_GlobalError.tsx
// app/blog/[slug]/global-error.tsx
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <h1>应用出错</h1>
        <p>{error.message}</p>
        <button onClick={() => reset()}>重试</button>
      </body>
    </html>
  );
}
