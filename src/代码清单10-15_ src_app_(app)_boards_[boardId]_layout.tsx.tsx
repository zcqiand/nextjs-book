// src/app/(app)/boards/[boardId]/layout.tsx
export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      border: '1px solid #eee'
    }}>
      {/* 看板元信息区 */}
      <div style={{
        paddingBottom: '1rem',
        marginBottom: '1rem',
        borderBottom: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '0.875rem', color: '#666' }}>
          任务数: 12
        </span>
        <span style={{ fontSize: '0.875rem', color: '#666' }}>
          成员: 5 人 · 截止: 2026-06-30
        </span>
      </div>

      {/* 看板内容 */}
      {children}
    </div>
  );
}