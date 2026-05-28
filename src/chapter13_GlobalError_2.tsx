// 从第 13 章提取
// 代码清单: Client Component 标记
// 文件名: chapter13_GlobalError_2.tsx
// app/global-error.tsx
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#c62828' }}>
              应用遇到严重错误
            </h1>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              这是一个意外的严重错误。请尝试重新加载。
            </p>
            <button
              onClick={() => reset()}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              重新加载
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
