// 从第 7 章提取
// 代码清单: BlogPage 函数
// 文件名: chapter07_BlogPage_3.ts
import { Suspense } from 'react';

export default async function BlogPage() {
  return (
    <main>
      <h1>博客</h1>

      {/* 并行加载：两个组件的数据请求同时开始 */}
      <Suspense fallback={<ArticleListSkeleton />}>
        <ArticleList />
      </Suspense>

      <Suspense fallback={<CommentListSkeleton />}>
        <CommentList />
      </Suspense>
    </main>
  );
}
