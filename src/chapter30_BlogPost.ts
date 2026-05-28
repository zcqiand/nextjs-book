// 从第 30 章提取
// 代码清单: BlogPost 函数
// 文件名: chapter30_BlogPost.ts
import { getFormatter } from 'next-intl/server';

export default async function BlogPost({ post }: { post: Post }) {
  const format = await getFormatter();

  return (
    <div>
      <time dateTime={post.publishedAt.toISOString()}>
        {format.dateTime(post.publishedAt, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
    </div>
  );
}
