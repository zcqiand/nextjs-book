// 从第 5 章提取
// 代码清单: loading.js 加载状态
// 文件名: chapter05_loading.tsx
// src/app/loading.tsx
export default function Loading() {
  return (
    <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <div style={{
        display: 'inline-block',
        width: '40px',
        height: '40px',
        border: '3px solid #ddd',
        borderTopColor: '#0070f3',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <p style={{ marginTop: '1rem', color: '#666' }}>加载中...</p>
    </main>
  );
}
