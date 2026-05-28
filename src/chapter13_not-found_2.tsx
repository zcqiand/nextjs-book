// 从第 13 章提取
// 代码清单: not-found.js 未找到页面
// 文件名: chapter13_not-found_2.tsx
// app/not-found.tsx
export default function NotFound() {
  return (
    <html lang="zh-CN">
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: '#f5f5f5',
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '8rem',
              fontWeight: 'bold',
              margin: '0',
              color: '#e0e0e0',
              lineHeight: 1,
            }}>
              404
            </h1>
            <h2 style={{
              fontSize: '1.5rem',
              margin: '1rem 0',
              color: '#333',
            }}>
              页面未找到
            </h2>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              你访问的页面不存在或已被删除。
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
        </div>
      </body>
    </html>
  );
}
