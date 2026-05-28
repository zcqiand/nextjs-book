// 从第 36 章提取
// 代码清单: app/blog/page.tsx
// 文件名: chapter36_BlogPage.ts
// app/blog/page.tsx
export default async function BlogPage() {
  // 请求被打上 'posts' 标签
  const posts = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts'] },
  });

  return <PostList posts={posts} />;
}
