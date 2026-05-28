// 从第 33 章提取
// 代码清单: app/blog/[slug]/components.tsx
// 文件名: chapter33_PostHeader.ts
// app/blog/[slug]/components.tsx
async function PostHeader({ slug }: { slug: string }) {
  // 模拟较慢的查询
  const post = await getPostWithAuthor(slug);

  return (
    <header>
      <h1>{post.title}</h1>
      <AuthorInfo author={post.author} />
    </header>
  );
}

async function PostContent({ slug }: { slug: string }) {
  // 内容通常较快
  const content = await getPostContent(slug);

  return (
    <div className="prose">
      {content}
    </div>
  );
}

async function Comments({ slug }: { slug: string }) {
  // 评论可能较慢
  const comments = await getPostComments(slug);

  return (
    <section>
      <h2>评论 ({comments.length})</h2>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
}
