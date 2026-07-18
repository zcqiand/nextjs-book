// src/app/(main)/page.tsx
import Link from 'next/link';
import { db } from '@/lib/db';
import { Button } from '@/components/ui/button';

export default async function HomePage() {
  const posts = await db.post.findMany({
    where: { published: true },
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: { author: { select: { name: true } } },
  });

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">我的技术博客</h1>
        <p className="text-xl text-gray-600 mb-8">
          分享技术心得与实战经验
        </p>
        <Button asChild>
          <Link href="/blog">浏览文章</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">最新文章</h2>
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="p-6 border rounded-lg hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{post.author.name}</span>
                <span className="mx-2">·</span>
                <time>{new Date(post.createdAt).toLocaleDateString('zh-CN')}</time>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}