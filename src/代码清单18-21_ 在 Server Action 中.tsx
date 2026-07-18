// 在 Server Action 中
export async function createPost(formData: FormData) {
  const newPost = await db.post.create({ /* ... */ });

  // 清除所有带有 'posts' 标签的缓存
  revalidateTag('posts');

  return { success: true, post: newPost };
}

// 在数据获取时打标签
export default async function BlogPage() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts'] }, // 给这次请求打标签
  });
}