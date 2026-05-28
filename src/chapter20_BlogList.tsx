// 从第 20 章提取
// 代码清单: 使用 revalidateTag 精确控制缓存
// 文件名: chapter20_BlogList.tsx
// 使用 revalidateTag 精确控制缓存
export default async function BlogList() {
  // 请求被打上 'posts' 标签
  const posts = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts'] },
  });

  return <PostList posts={posts} />;
}

// 在 Server Action 中清除缓存
export async function createPost(formData: FormData) {
  const newPost = await db.post.create({
    data: { title: formData.get('title') as string },
  });

  // 清除标签相关的所有缓存
  revalidateTag('posts');

  return { success: true, post: newPost };
}
