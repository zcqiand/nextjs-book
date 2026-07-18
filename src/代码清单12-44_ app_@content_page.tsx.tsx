// app/@content/page.tsx
export default function Content() {
  return (
    <main style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>概览</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
          <h3 style={{ color: '#666', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            总访问量
          </h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c3e50' }}>
            12,345
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
          <h3 style={{ color: '#666', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            本月收入
          </h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#27ae60' }}>
            ¥45,678
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
          <h3 style={{ color: '#666', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            活跃用户
          </h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3498db' }}>
            892
          </p>
        </div>
      </div>
    </main>
  );
}