// 从第 13 章提取
// 代码清单: Client Component 标记
// 文件名: chapter13_Error_2.tsx
// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '4rem auto',
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#c62828' }}>
        页面出错了
      </h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        抱歉，这个页面遇到了问题。
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
        重试
      </button>
    </div>
  );
}
