// app/blog/[slug]/page.tsx
// 可以在每个 fetch 调用时指定不同的缓存策略
export default async function BlogPost({ params }) {
  const post = await fetchPost(params.slug, {
    next: { revalidate: 60 },  // 这个 fetch 的缓存策略
  });

  const author = await fetchAuthor(post.authorId, {
    next: { revalidate: 3600 },  // 另一个 fetch 的缓存策略
  });

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{author.name}</p>
    </div>
  );
}