// app/users/[userId]/posts/[postId]/page.tsx

interface PageProps {
  params: Promise<{
    userId: string;
    postId: string;
  }>;
}

export default async function UserPostPage({ params }: PageProps) {
  // Next.js 15 中，需要 await 整个 params 对象
  // 然后从解构后的对象中获取各个参数
  const { userId, postId } = await params;

  const post = await getPost(userId, postId);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>作者: {post.author}</p>
    </div>
  );
}