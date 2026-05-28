// 从第 11 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter11_UserPage.tsx
// src/app/users/[userId]/page.tsx
import Link from 'next/link';

const users = {
  '1': { name: '张三', bio: '热爱技术，专注前端开发', posts: 2 },
  '2': { name: '李四', bio: '全栈工程师，喜欢捣鼓各种框架', posts: 1 },
};

export function generateStaticParams() {
  return Object.keys(users).map((userId) => ({
    userId,
  }));
}

export default function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = users[userId as keyof typeof users];

  if (!user) {
    return <div>用户不存在</div>;
  }

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          {user.name}
        </h1>
        <p style={{ color: '#666' }}>{user.bio}</p>
      </div>

      <div style={{
        padding: '1rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        marginBottom: '1.5rem',
      }}>
        <p>帖子数量: {user.posts}</p>
      </div>

      <Link
        href={`/users/${userId}/posts`}
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
        }}
      >
        查看所有帖子
      </Link>
    </main>
  );
}
