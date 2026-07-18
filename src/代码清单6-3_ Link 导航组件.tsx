import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>首页</h1>
      <nav>
        <Link href="/">首页</Link>
        <Link href="/about">关于我们</Link>
        <Link href="/contact">联系我们</Link>
      </nav>
    </main>
  );
}