// 从第 19 章提取
// 代码清单: 使用 clientComponents 减少服务端组件的水合
// 文件名: chapter19_DashboardLayout.tsx
// 使用 clientComponents 减少服务端组件的水合
// layout.tsx - 服务端组件，不需要水合
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard">
      <Sidebar /> {/* 服务端组件 */}
      <main>{children}</main>
    </div>
  );
}

// Sidebar.tsx - 服务端组件
export default async function Sidebar() {
  const categories = await db.category.findMany(); // 直接数据库查询
  return <nav>{categories.map(c => <Link key={c.id} href={`/category/${c.slug}`}>{c.name}</Link>)}</nav>;
}
