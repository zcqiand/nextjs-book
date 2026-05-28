// 从第 16 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter16_BlogPostPage.tsx
// src/app/(main)/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await db.post.findMany({
    where: { published: true },
    select: { slug: true },
  });

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await db.post.findUnique({
    where: { slug },
  });

  if (!post) return { title: '文章未找到' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await db.post.findUnique({
    where: { slug },
    include: {
      author: { select: { name: true } },
      tags: true,
      comments: {
        include: { author: { select: { name: true } } },
        orderBy: { createdAt: 'desc' },
      },
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="flex gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag.id}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600">
          <span>{post.author.name}</span>
          <span className="mx-2">·</span>
          <time>{formatDate(post.createdAt)}</time>
        </div>
      </header>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <section className="mt-12 pt-8 border-t">
        <h2 className="text-2xl font-bold mb-6">评论</h2>
        {post.comments.length === 0 ? (
          <p className="text-gray-500">还没有评论</p>
        ) : (
          <ul className="space-y-4">
            {post.comments.map((comment) => (
              <li key={comment.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="mx-2 text-gray-400">·</span>
                  <time className="text-sm text-gray-500">
                    {formatDate(comment.createdAt)}
                  </time>
                </div>
                <p>{comment.content}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}
