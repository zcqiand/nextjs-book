// src/app/blog/page.tsx
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/posts';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">博客</h1>

      {/* 响应式网格：移动端单列，桌面端三列 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}