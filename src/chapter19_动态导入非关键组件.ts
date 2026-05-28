// 从第 19 章提取
// 代码清单: 动态导入非关键组件
// 文件名: chapter19_动态导入非关键组件.ts
// 动态导入非关键组件
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <Skeleton />,
  ssr: false, // 如果不需要 SSR
});
