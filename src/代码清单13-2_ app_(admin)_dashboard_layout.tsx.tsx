// 平行路由的布局：槽名即 prop 名，@team 目录 → team prop，@activity 目录 → activity prop。
// 注意 children 只是同级 page.tsx 的输出，不是「所有子内容」的统称。
const panelStyle: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: 12,
  padding: 16,
};

export default function DashboardLayout({
  children,
  team,
  activity,
}: {
  children: React.ReactNode;   // 主内容：dashboard/page.tsx 的输出
  team: React.ReactNode;       // 左栏：@team/page.tsx 的输出
  activity: React.ReactNode;   // 右栏：@activity/page.tsx 的输出
}) {
  return (
    // 三栏 Grid：左 280px（团队）、中自适应（主内容）、右 320px（动态）
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr 320px',
        gap: 16,
        padding: 16,
        minHeight: '100vh',
        background: '#f5f6f8',
      }}
    >
      <aside style={panelStyle}>{team}</aside>
      <main style={panelStyle}>{children}</main>
      <aside style={panelStyle}>{activity}</aside>
    </div>
  );
}