'use client';

import { useRouter } from 'next/navigation';

export default function SearchForm() {
  const router = useRouter();

  const handleSearch = (query) => {
    // 带查询参数导航
    router.push({ pathname: '/search', query: { q: query } });
  };

  return (
    <button onClick={() => handleSearch('nextjs')}>
      搜索 Next.js
    </button>
  );
}