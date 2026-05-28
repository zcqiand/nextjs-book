// 从第 33 章提取
// 代码清单: app/blog/[slug]/page.tsx
// 文件名: chapter33_BlogPostPage.ts
// app/blog/[slug]/page.tsx
import { Suspense } from 'react';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <article>
      {/* 立即显示骨架屏 */}
      <Suspense fallback={<PostHeaderSkeleton />}>
        <PostHeader slug={slug} />
      </Suspense>

      <Suspense fallback={<PostContentSkeleton />}>
        <PostContent slug={slug} />
      </Suspense>

      <Suspense fallback={<CommentsSkeleton />}>
        <Comments slug={slug} />
      </Suspense>
    </article>
  );
}
