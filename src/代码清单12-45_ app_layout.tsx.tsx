// app/layout.tsx
export default function DashboardLayout({
  children,
  sidebar,
  header,
  content,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {header}
      <div style={{ display: 'flex', flex: 1 }}>
        {sidebar}
        {content}
      </div>
    </div>
  );
}