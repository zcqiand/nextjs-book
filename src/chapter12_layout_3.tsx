// 从第 12 章提取
// 代码清单: app/(main)/blog/layout.tsx
// 文件名: chapter12_layout_3.tsx
// app/(main)/blog/layout.tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <aside style={{ width: '200px' }}>
        <h3 style={{ marginBottom: '1rem' }}>分类</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a href="/blog/tech" style={{ color: '#0070f3' }}>技术</a>
          <a href="/blog/life" style={{ color: '#0070f3' }}>生活</a>
          <a href="/blog/thoughts" style={{ color: '#0070f3' }}>随想</a>
        </nav>
      </aside>

      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}
