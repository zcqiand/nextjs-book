export default function Forbidden() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-rose-50">
      <p className="text-6xl font-bold text-rose-200">403</p>
      <h1 className="text-2xl font-semibold text-rose-800">无权访问</h1>
      <p className="text-rose-600">你没有查看该任务所需的权限，请联系任务负责人。</p>
    </main>
  );
}