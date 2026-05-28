// 从第 35 章提取
// 代码清单: app/(dashboard)/layout.tsx
// 文件名: chapter35_layout_2.tsx
// app/(dashboard)/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 这个布局只在首次进入时渲染
  // 导航时不会重新创建
  return (
    <div className="dashboard">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
