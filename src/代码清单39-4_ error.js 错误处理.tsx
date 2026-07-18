// error.tsx - 现在支持更多功能
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>出错了！</h2>
      <p>{error.message}</p>
      {error.digest && <p>错误 ID: {error.digest}</p>}
      <button onClick={() => reset()}>重试</button>
    </div>
  );
}