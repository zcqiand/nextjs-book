// app/blog/page.tsx
export default async function BlogPage() {
  // 请求被打上 'posts' 标签
  const posts = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts'] },
  });

  return <PostList posts={posts} />;
}