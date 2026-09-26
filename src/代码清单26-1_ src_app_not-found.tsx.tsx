import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50">
      <p className="text-6xl font-bold text-slate-300">404</p>
      <h1 className="text-2xl font-semibold text-slate-800">任务不存在</h1>
      <p className="text-slate-500">你访问的任务可能已被删除，或者地址输入有误。</p>
      <Link
        href="/tasks"
        className="rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
      >
        返回任务板
      </Link>
    </main>
  );
}