// 从第 11 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter11_UserPostPage_2.tsx
// src/app/users/[userId]/posts/[postId]/page.tsx
import Link from 'next/link';

const allPosts = {
  '1': {
    '1': { title: '我的第一篇博客', content: '这是内容...', date: '2024-10-01' },
    '2': { title: '学习 Next.js 的心得', content: '学习心得...', date: '2024-09-15' },
  },
  '2': {
    '3': { title: 'React 最佳实践', content: '最佳实践内容...', date: '2024-08-20' },
  },
};

export function generateStaticParams() {
  const paths: { userId: string; postId: string }[] = [];

  for (const userId of Object.keys(allPosts)) {
    for (const postId of Object.keys(allPosts[userId])) {
      paths.push({ userId, postId });
    }
  }

  return paths;
}

export default function UserPostPage({
  params,
}: {
  params: Promise<{ userId: string; postId: string }>;
}) {
  const { userId, postId } = use(params);
  const userPosts = allPosts[userId as keyof typeof allPosts];
  const post = userPosts?.[postId as keyof typeof userPosts];

  if (!post) {
    return <div>帖子不存在</div>;
  }

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <Link
        href={`/users/${userId}/posts`}
        style={{ color: '#0070f3' }}
      >
        ← 返回帖子列表
      </Link>

      <h1 style={{ fontSize: '2rem', margin: '1.5rem 0 0.5rem' }}>
        {post.title}
      </h1>

      <p style={{ color: '#666', marginBottom: '1.5rem' }}>{post.date}</p>

      <div style={{ lineHeight: 1.8 }}>{post.content}</div>
    </main>
  );
}
