// 从第 7 章提取
// 代码清单: Client Component 标记
// 文件名: chapter07_Comments.tsx
// src/app/blog/[slug]/Comments.tsx
'use client';

import { useEffect, useState } from 'react';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

interface CommentsProps {
  postSlug: string;
}

export default function Comments({ postSlug }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`/api/comments?postSlug=${postSlug}`);
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [postSlug]);

  if (loading) {
    return <div>加载评论中...</div>;
  }

  if (comments.length === 0) {
    return <p style={{ color: '#666' }}>还没有评论，快来抢沙发吧！</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {comments.map((comment) => (
        <div key={comment.id} style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{comment.author}</p>
          <p style={{ color: '#333' }}>{comment.content}</p>
          <p style={{ color: '#999', fontSize: '0.875rem', marginTop: '0.5rem' }}>{comment.date}</p>
        </div>
      ))}
    </div>
  );
}
