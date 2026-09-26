// App Router - Server Component（默认）
// 这段代码不会发送到客户端
export default async function TaskDetail({ id }) {
  const task = await db.tasks.findUnique({ where: { id } });

  return (
    <article>
      <h1>{task.title}</h1>
      <p>{task.content}</p>
      {/* LikeButton 需要交互，所以标记为客户端组件 */}
      <LikeButton initialLikes={task.likes} />
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