// src/app/contact/layout.tsx
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        overflow: 'hidden'
      }}>
        {/* Contact 专用的顶部横幅 */}
        <div style={{
          backgroundColor: '#667eea',
          color: 'white',
          padding: '1rem 2rem'
        }}>
          <h2 style={{ margin: 0 }}>联系我们</h2>
          <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>我们随时准备回答您的问题</p>
        </div>

        {/* 页面内容 */}
        <div style={{ padding: '2rem' }}>
          {children}
        </div>
      </div>
    </div>
  );
}