// 从第 12 章提取
// 代码清单: app/layout.tsx
// 文件名: chapter12_layout_4.tsx
// app/layout.tsx
export default function DashboardLayout({
  children,
  sidebar,
  main,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '250px' }}>
        {sidebar}
      </div>
      <div style={{ flex: 1 }}>
        {main}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
