// 从第 7 章提取
// 代码清单: src/app/blog/[slug]/CommentsSkeleton.tsx
// 文件名: chapter07_CommentsSkeleton.tsx
// src/app/blog/[slug]/CommentsSkeleton.tsx
export default function CommentsSkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {[1, 2, 3].map((i) => (
        <div key={i} style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <div style={{ width: '100px', height: '16px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '0.5rem' }} />
          <div style={{ width: '80%', height: '14px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '0.5rem' }} />
          <div style={{ width: '60%', height: '12px', backgroundColor: '#e0e0e0', borderRadius: '4px' }} />
        </div>
      ))}
    </div>
  );
}
