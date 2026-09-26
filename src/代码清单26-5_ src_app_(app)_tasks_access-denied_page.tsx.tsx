import Link from "next/link";

export default function AccessDenied() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-rose-50">
      <p className="text-6xl font-bold text-rose-200">403</p>
      <h1 className="text-2xl font-semibold text-rose-800">无权访问</h1>
      <p className="text-rose-600">该任务存在，但当前账号不是它的负责人。</p>
      <Link
        href="/tasks"
        className="rounded-lg bg-rose-600 px-4 py-2 text-white hover:bg-rose-500"
      >
        返回任务板
      </Link>
    </main>
  );
}