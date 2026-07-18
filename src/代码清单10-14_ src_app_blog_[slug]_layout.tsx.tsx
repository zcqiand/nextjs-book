// src/app/blog/[slug]/layout.tsx
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      border: '1px solid #eee'
    }}>
      {/* 文章元信息区 */}
      <div style={{
        paddingBottom: '1rem',
        marginBottom: '1rem',
        borderBottom: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '0.875rem', color: '#666' }}>
          浏览量: 1,234
        </span>
        <span style={{ fontSize: '0.875rem', color: '#666' }}>
          阅读时间: 约 5 分钟
        </span>
      </div>

      {/* 文章内容 */}
      {children}
    </div>
  );
}