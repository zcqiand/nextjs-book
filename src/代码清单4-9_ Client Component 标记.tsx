// App Router - Server Component（默认）
// 这段代码不会发送到客户端
export default async function BlogPost({ id }) {
  const post = await db.posts.findUnique({ where: { id } });

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* LikeButton 需要交互，所以标记为客户端组件 */}
      <LikeButton initialLikes={post.likes} />
    </article>
  );
}

// LikeButton - Client Component（需要交互）
'use client';
import { useState } from 'react';

export function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <button onClick={() => setLikes(l => l + 1)}>
      {likes} 赞
    </button>
  );
}