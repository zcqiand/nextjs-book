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
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        出错了！
      </h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        抱歉，页面遇到了一个问题。
      </p>
      <p style={{
        fontSize: '0.875rem',
        color: '#999',
        marginBottom: '2rem',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
      }}>
        {error.message}
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