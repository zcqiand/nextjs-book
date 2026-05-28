// 从第 20 章提取
// 代码清单: Client Component 标记
// 文件名: chapter20_PostCard.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function PostCard({ post }: { post: Post }) {
  const router = useRouter();

  function handleMouseEnter() {
    // 预获取文章数据
    router.prefetch(`/blog/${post.slug}`);
  }

  return (
    <article onMouseEnter={handleMouseEnter}>
      <h2>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
    </article>
  );
}
