// 从第 13 章提取
// 代码清单: not-found.js 未找到页面
// 文件名: chapter13_not-found.tsx
// app/not-found.tsx
export default function NotFound() {
  return (
    <html lang="zh-CN">
      <body>
        <div style={{
          maxWidth: '600px',
          margin: '4rem auto',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <h1 style={{ fontSize: '6rem', margin: '0', color: '#e0e0e0' }}>
            404
          </h1>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            页面未找到
          </h2>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            抱歉，你访问的页面不存在或已被删除。
          </p>
          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0070f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            返回首页
          </a>
        </div>
      </body>
    </html>
  );
}
