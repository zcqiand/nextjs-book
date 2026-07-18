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