// 从第 12 章提取
// 代码清单: app/layout.tsx
// 文件名: chapter12_layout_5.tsx
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
