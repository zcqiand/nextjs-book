// src/app/(main)/blog/page.tsx
import Link from 'next/link';
import { db } from '@/lib/db';

export const metadata = {
  title: '博客文章',
  description: '浏览所有技术文章',
};

export default async function BlogPage() {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    include: {
      author: { select: { name: true } },
      tags: true,
    },
  });

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">博客文章</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-2 py-1 text-xs bg-gray-100 rounded"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{post.author.name}</span>
                <span className="mx-2">·</span>
                <time>{new Date(post.createdAt).toLocaleDateString('zh-CN')}</time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}