// 从第 7 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter07_BlogPostPage.tsx
// src/app/blog/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import Comments from './Comments';
import CommentsSkeleton from './CommentsSkeleton';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { title: '文章未找到' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <Link href="/blog" style={{ color: '#0070f3', textDecoration: 'none' }}>
        ← 返回博客列表
      </Link>

      <article style={{ marginTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{post.title}</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          {post.date} · {post.author}
        </p>
        <div style={{ lineHeight: 1.8, fontSize: '1.125rem' }}>{post.content}</div>
      </article>

      {/* 评论部分使用 Suspense，显示加载骨架 */}
      <section style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
        <h2 style={{ marginBottom: '1rem' }}>评论区</h2>
        <Suspense fallback={<CommentsSkeleton />}>
          <Comments postSlug={params.slug} />
        </Suspense>
      </section>
    </main>
  );
}
