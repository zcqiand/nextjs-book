// src/app/contact/success/page.tsx
import Link from 'next/link';

export default function ContactSuccessPage() {
  return (
    <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#4caf50' }}>
        提交成功！
      </h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        我们已经收到您的留言，会尽快回复您。
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        返回首页
      </Link>
    </main>
  );
}