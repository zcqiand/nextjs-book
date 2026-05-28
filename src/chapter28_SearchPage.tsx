// 从第 28 章提取
// 代码清单: Client Component 标记
// 文件名: chapter28_SearchPage.tsx
// app/search/page.tsx
'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function SearchPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get('q') || '';
  const page = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || 'newest';

  function updateSearch(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    params.delete('page'); // 重置分页
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <h1>搜索结果</h1>

      <div className="search-filters">
        <input
          type="text"
          value={query}
          onChange={(e) => updateSearch('q', e.target.value)}
          placeholder="搜索..."
        />

        <select
          value={sort}
          onChange={(e) => updateSearch('sort', e.target.value)}
        >
          <option value="newest">最新</option>
          <option value="popular">最热</option>
          <option value="relevant">相关</option>
        </select>
      </div>

      <p>
        当前: 第 {page} 页 | 排序: {sort}
      </p>
    </div>
  );
}
