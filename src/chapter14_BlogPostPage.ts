// 从第 14 章提取
// 代码清单: app/blog/[slug]/page.tsx
// 文件名: chapter14_BlogPostPage.ts
// app/blog/[slug]/page.tsx
import { getComments } from '@/app/actions/comments';
import { CommentForm } from '@/app/components/comment-form';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comments = await getComments(slug);

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        文章标题
      </h1>

      <div style={{ lineHeight: 1.8 }}>
        文章内容...
      </div>

      {/* 评论列表 */}
      <section style={{ marginTop: '3rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>
          评论 ({comments.length})
        </h3>

        {comments.length === 0 ? (
          <p style={{ color: '#666' }}>还没有评论，来发表第一篇评论吧！</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {comments.map((comment) => (
              <li
                key={comment.id}
                style={{
                  padding: '1rem',
                  borderBottom: '1px solid #eee',
                }}
              >
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>{comment.author}</strong>
                  <span style={{ color: '#999', marginLeft: '0.5rem', fontSize: '0.875rem' }}>
                    {comment.createdAt.toLocaleDateString('zh-CN')}
                  </span>
                </div>
                <p style={{ margin: 0, lineHeight: 1.6 }}>{comment.content}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* 评论表单 */}
      <CommentForm postSlug={slug} />
    </article>
  );
}
