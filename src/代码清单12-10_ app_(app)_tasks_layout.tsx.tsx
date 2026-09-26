// app/(app)/tasks/layout.tsx
export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <aside style={{ width: '200px' }}>
        <h3 style={{ marginBottom: '1rem' }}>状态</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a href="/tasks/todo" style={{ color: '#0070f3' }}>待办</a>
          <a href="/tasks/in-progress" style={{ color: '#0070f3' }}>进行中</a>
          <a href="/tasks/done" style={{ color: '#0070f3' }}>已完成</a>
        </nav>
      </aside>

      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}