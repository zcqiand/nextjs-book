// 从第 5 章提取
// 代码清单: Client Component 标记
// 文件名: chapter05_Error.tsx
// src/app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#dc3545' }}>
        出错了
      </h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        {error.message || '发生了未知错误'}
      </p>
      <button
        onClick={() => reset()}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        重试
      </button>
    </div>
  );
}
