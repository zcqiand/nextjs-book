// app/(main)/layout.tsx
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#333', color: 'white', padding: '1rem' }}>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>首页</a>
          <a href="/blog" style={{ color: 'white', textDecoration: 'none' }}>博客</a>
        </nav>
      </header>

      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>

      <footer style={{ backgroundColor: '#f5f5f5', padding: '1rem', textAlign: 'center' }}>
        © 2024 我的博客
      </footer>
    </div>
  );
}