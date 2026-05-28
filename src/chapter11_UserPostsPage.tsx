// 从第 11 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter11_UserPostsPage.tsx
// src/app/users/[userId]/posts/page.tsx
import Link from 'next/link';

const userPosts = {
  '1': [
    { id: '1', title: '我的第一篇博客', date: '2024-10-01' },
    { id: '2', title: '学习 Next.js 的心得', date: '2024-09-15' },
  ],
  '2': [
    { id: '3', title: 'React 最佳实践', date: '2024-08-20' },
  ],
};

export function generateStaticParams() {
  return Object.keys(userPosts).map((userId) => ({
    userId,
  }));
}

export default function UserPostsPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const posts = userPosts[userId as keyof typeof userPosts] || [];

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <Link href={`/users/${userId}`} style={{ color: '#0070f3' }}>
        ← 返回用户主页
      </Link>

      <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>
        用户 {userId} 的帖子
      </h1>

      {posts.length === 0 ? (
        <p style={{ color: '#666' }}>暂无帖子</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '1rem' }}>
              <h3 style={{ margin: '0 0 0.25rem' }}>{post.title}</h3>
              <span style={{ fontSize: '0.875rem', color: '#666' }}>
                {post.date}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
