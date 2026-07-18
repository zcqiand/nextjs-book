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