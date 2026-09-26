'use client';

import { useRouter } from 'next/navigation';

export default function TaskSearchForm() {
  const router = useRouter();

  const handleSearch = (keyword: string) => {
    // 带查询参数导航
    router.push(`/tasks?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <button onClick={() => handleSearch('看板')}>
      搜索包含「看板」的任务
    </button>
  );
}