// app/dashboard/page.tsx
import dynamic from 'next/dynamic';

// 仪表盘依赖的图表库单独加载
const ChartComponent = dynamic(
  () => import('@/components/Chart'),
  { ssr: false }
);

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ChartComponent data={...} />
    </div>
  );
}