// 从第 6 章提取
// 代码清单: Client Component 标记
// 文件名: chapter06_RefreshButton.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function RefreshButton() {
  const router = useRouter();

  const handleRefresh = () => {
    // 失效当前页面的缓存并刷新
    router.refresh();
  };

  return <button onClick={handleRefresh}>刷新页面</button>;
}
