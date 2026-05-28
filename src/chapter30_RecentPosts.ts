// 从第 30 章提取
// 代码清单: RecentPosts 函数
// 文件名: chapter30_RecentPosts.ts
import { getFormatter } from 'next-intl/server';

function RecentPosts({ posts }: { posts: Post[] }) {
  const format = await getFormatter();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <span>{post.title}</span>
          <time>
            {format.relativeTime(post.publishedAt, 'day', { numeric: 'auto' })}
          </time>
        </li>
      ))}
    </ul>
  );
}
