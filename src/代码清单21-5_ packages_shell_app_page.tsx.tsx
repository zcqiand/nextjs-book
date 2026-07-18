// packages/shell/app/page.tsx
import dynamic from 'next/dynamic';

// 动态加载远程营销模块
const MarketingNav = dynamic(
  () => import('marketing/nav'),
  { ssr: false }
);

// 动态加载远程仪表盘模块
const DashboardWidget = dynamic(
  () => import('dashboard/widget'),
  { ssr: false }
);

export default function HomePage() {
  return (
    <div>
      <h1>我的应用</h1>

      {/* 使用远程模块 */}
      <MarketingNav />
      <DashboardWidget />

      <p>欢迎使用微前端架构</p>
    </div>
  );
}