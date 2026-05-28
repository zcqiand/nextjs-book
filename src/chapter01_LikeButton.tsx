// 从第 1 章提取
// 代码清单: Server Component 和 Client Component
// 文件名: chapter01_LikeButton.tsx
// Server Component — 运行在服务端，不发送 JS 到浏览器
async function PostList() {
  const posts = await db.post.findMany(); // 直接访问数据库
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}

// Client Component — 需要交互的组件使用 'use client'
'use client';
import { useState } from 'react';

export function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);
  return (
    <button onClick={() => setLikes(l => l + 1)}>
      {likes} 赞
    </button>
  );
}
