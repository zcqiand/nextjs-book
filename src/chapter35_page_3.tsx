// 从第 35 章提取
// 代码清单: app/blog/page.tsx
// 文件名: chapter35_page_3.tsx
// app/blog/page.tsx
import { Suspense } from 'react';

export default function BlogPage() {
  return (
    <div>
      <h1>博客</h1>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </div>
  );
}
