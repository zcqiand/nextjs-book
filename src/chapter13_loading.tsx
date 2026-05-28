// 从第 13 章提取
// 代码清单: loading.js 加载状态
// 文件名: chapter13_loading.tsx
// app/loading.tsx
export default function Loading() {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '4rem auto',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'inline-block',
        width: '40px',
        height: '40px',
        border: '3px solid #e0e0e0',
        borderTopColor: '#0070f3',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <p style={{ marginTop: '1rem', color: '#666' }}>
        加载中...
      </p>
    </div>
  );
}
