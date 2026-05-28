// 从第 33 章提取
// 代码清单: Client Component 标记
// 文件名: chapter33_PostFilter.tsx
// src/components/post-filter.tsx
'use client';

import { useState } from 'react';

export function PostFilter({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState('');

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="搜索文章..."
      />
      {filtered.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
