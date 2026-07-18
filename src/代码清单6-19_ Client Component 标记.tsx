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