import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <p className="text-2xl font-semibold">404 — 页面不存在</p>
        <p className="mt-2 text-muted-foreground">链接可能已失效，请返回首页。</p>
        <Link className="mt-4 inline-block underline" href="/">
          回到首页
        </Link>
      </div>
    </main>
  );
}