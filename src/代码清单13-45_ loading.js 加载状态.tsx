// app/blog/[slug]/loading.tsx
export default function Loading() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
    }}>
      {/* 模拟文章骨架屏 */}
      <div style={{
        height: '2rem',
        width: '60%',
        backgroundColor: '#e0e0e0',
        marginBottom: '1rem',
        borderRadius: '4px',
      }} />
      <div style={{
        height: '1rem',
        width: '40%',
        backgroundColor: '#f0f0f0',
        marginBottom: '2rem',
        borderRadius: '4px',
      }} />
      <div style={{
        height: '200px',
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
      }} />
    </div>
  );
}