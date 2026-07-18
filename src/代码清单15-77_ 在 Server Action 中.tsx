// 在 Server Action 中
export async function createPost(formData: FormData) {
  // 创建文章...
  const newPost = await db.post.create({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  // 清除所有 blog-posts 标签的缓存
  // 这样所有显示博客列表的页面都会自动重新验证
  revalidateTag('blog-posts');

  return { success: true, post: newPost };
}

// 在 Server Component 中使用标签
export default async function BlogPage() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { tags: ['blog-posts'] }, // 给请求打上标签
    cache: 'force-cache',
  });

  return <BlogList posts={posts} />;
}