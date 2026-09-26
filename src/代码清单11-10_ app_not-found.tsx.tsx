// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{
      maxWidth: '600px',
      margin: '4rem auto',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        页面未找到
      </h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        抱歉，你访问的页面不存在或已被删除。
      </p>
      <Link href="/" style={{ color: '#0070f3' }}>
        返回首页
      </Link>
    </main>
  );
}