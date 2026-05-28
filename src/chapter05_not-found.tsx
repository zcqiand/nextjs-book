// 从第 5 章提取
// 代码清单: not-found.js 未找到页面
// 文件名: chapter05_not-found.tsx
// src/app/not-found.tsx
export default function NotFound() {
  return (
    <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#666' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>页面未找到</h2>
      <p style={{ marginBottom: '2rem', color: '#999' }}>
        您访问的页面不存在或已被删除。
      </p>
      <a
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
      </a>
    </main>
  );
}
