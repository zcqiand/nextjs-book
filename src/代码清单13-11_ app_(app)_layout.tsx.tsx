import Link from 'next/link';

export default function AppLayout({
  children,
  modal,
}: {
  children: React.ReactNode; // 常规页面内容
  modal: React.ReactNode;    // @modal 槽的输出
}) {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
      <nav style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <Link href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>首页</Link>
        <Link href="/tasks" style={{ color: '#2563eb', textDecoration: 'none' }}>任务</Link>
      </nav>
      <main>{children}</main>
      {/* modal 槽放在 children 之后即可：TaskModal 自带 position:fixed 全屏遮罩，
          天然覆盖在页面内容之上，layout 不需要额外写叠加定位 */}
      {modal}
    </div>
  );
}