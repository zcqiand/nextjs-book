// 从第 5 章提取
// 代码清单: src/app/about/layout.tsx
// 文件名: chapter05_layout_2.tsx
// src/app/about/layout.tsx
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '2rem' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '2rem'
      }}>
        {/* 这是 about 专属的布局包装 */}
        <aside style={{ borderRight: '1px solid #eee', paddingRight: '1rem', marginRight: '1rem' }}>
          <h3>关于导航</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/about">公司简介</a></li>
            <li><a href="/about/team">团队成员</a></li>
            <li><a href="/about/history">发展历程</a></li>
          </ul>
        </aside>
        <main style={{ flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
