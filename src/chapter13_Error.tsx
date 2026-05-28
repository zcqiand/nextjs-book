// 从第 13 章提取
// 代码清单: Error 函数
// 文件名: chapter13_error.tsx
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // 可以将 error.digest 发送到错误监控服务
  console.error('Error digest:', error.digest);

  return (
    <div>
      {/* ... */}
    </div>
  );
}
