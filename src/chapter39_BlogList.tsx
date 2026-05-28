// 从第 39 章提取
// 代码清单: Client Component 标记
// 文件名: chapter39_BlogList.tsx
// 推荐：Server Component 处理数据获取
async function BlogList() {
  const posts = await db.post.findMany();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
}

// 必要时使用 Client Component
'use client';

function LikeButton({ postId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  return <button onClick={() => setLikes(l => l + 1)}>{likes}</button>;
}
