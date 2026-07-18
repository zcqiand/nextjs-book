// app/blog/page.tsx
import { Suspense } from 'react';

export default function BlogPage() {
  return (
    <div>
      <h1>博客</h1>

      {/* 立即显示骨架屏 */}
      <Suspense fallback={<PostListSkeleton />}>
        {/* 文章列表在数据加载完成后流式传输 */}
        <PostList />
      </Suspense>

      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>
    </div>
  );
}

async function PostList() {
  const posts = await getPosts(); // 较慢的数据库查询
  return <PostListView posts={posts} />;
}