// src/app/(marketing)/layout.tsx
import Link from 'next/link';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontWeight: 'bold' }}>taskflow-board</span>
        <Link
          href="/boards"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '6px',
            textDecoration: 'none'
          }}
        >
          进入工作台
        </Link>
      </header>
      <div>{children}</div>
    </div>
  );
}

// src/app/(marketing)/page.tsx
export default function HomePage() {
  return (
    <main style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        让团队任务井然有序
      </h1>
      <p style={{ color: '#666' }}>
        看板、任务、成员、评论，一个工作台全部搞定。
      </p>
    </main>
  );
}