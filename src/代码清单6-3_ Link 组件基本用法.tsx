import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>首页</h1>
      <nav>
        <Link href="/">首页</Link>
        <Link href="/tasks">任务</Link>
        <Link href="/members">成员</Link>
      </nav>
    </main>
  );
}