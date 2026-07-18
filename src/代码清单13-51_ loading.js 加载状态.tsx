// app/loading.tsx
export default function Loading() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '4rem auto',
      padding: '2rem',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <div style={{
          height: '2.5rem',
          width: '70%',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          animation: 'pulse 1.5s ease-in-out infinite',
        }} />
        <div style={{
          height: '1rem',
          width: '30%',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          animation: 'pulse 1.5s ease-in-out infinite',
        }} />
        <div style={{
          height: '200px',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          marginTop: '1rem',
          animation: 'pulse 1.5s ease-in-out infinite',
        }} />
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}