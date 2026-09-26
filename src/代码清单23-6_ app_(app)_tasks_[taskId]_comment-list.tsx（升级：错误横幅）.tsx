'use client';

import { useOptimistic, useRef, useState, startTransition } from 'react';
import { createCommentAction } from '@/app/actions/comments';
import type { Comment } from '@/lib/data';

export default function CommentList({
  taskId,
  initialComments,
}: {
  taskId: string;
  initialComments: Comment[];
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    initialComments,
    (current, optimisticComment: Comment) => [optimisticComment, ...current],
  );

  async function handleSubmit(formData: FormData) {
    const rawContent = formData.get('content');
    const content = typeof rawContent === 'string' ? rawContent.trim() : '';
    if (!content) return;

    setErrorMessage(null); // 新一次提交先清掉上一次留下的错误横幅

    startTransition(async () => {
      const rawAuthor = formData.get('author');
      addOptimisticComment({
        id: `optimistic-${Date.now()}`,
        taskId,
        author:
          typeof rawAuthor === 'string' && rawAuthor.trim() ? rawAuthor.trim() : '匿名成员',
        content,
        createdAt: new Date().toISOString(),
      });
      formRef.current?.reset();
      try {
        await createCommentAction(taskId, formData);
      } catch {
        // 在这里捕获而不是放给 error boundary（下一章讲的兜底组件）：失败要落在评论区横幅上，
        // 而不是打断整个页面。回滚由 useOptimistic 自动完成，见上方说明
        setErrorMessage('评论发送失败，已撤销本次显示，请重试');
      }
    });
  }

  return (
    <section style={{ marginTop: 24 }}>
      <h2 style={{ fontSize: 16, margin: '0 0 8px' }}>评论区</h2>
      <ul style={{ listStyle: 'none', margin: '0 0 16px', padding: 0, display: 'grid', gap: 8 }}>
        {optimisticComments.map((comment) => (
          <li
            key={comment.id}
            style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              padding: '8px 12px',
            }}
          >
            <div style={{ fontSize: 13, color: '#6b7280' }}>
              {comment.author} · {new Date(comment.createdAt).toLocaleString('zh-CN')}
            </div>
            <div style={{ fontSize: 14 }}>{comment.content}</div>
          </li>
        ))}
      </ul>
      {/* 错误横幅：只在失败后出现，红色底色让「这条没发出去」一眼可辨 */}
      {errorMessage && (
        <p
          role="alert"
          style={{
            margin: '0 0 8px',
            padding: '8px 12px',
            borderRadius: 8,
            background: '#fef2f2',
            color: '#b91c1c',
            fontSize: 14,
          }}
        >
          {errorMessage}
        </p>
      )}
      <form ref={formRef} action={handleSubmit} style={{ display: 'flex', gap: 8 }}>
        <input
          name="author"
          placeholder="你的名字（可留空）"
          style={{ width: 150, padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 14 }}
        />
        <input
          name="content"
          placeholder="写下你的评论"
          style={{ flex: 1, padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 14 }}
        />
        <button
          type="submit"
          style={{
            padding: '6px 16px',
            border: 'none',
            borderRadius: 6,
            background: '#2563eb',
            color: '#ffffff',
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          发送
        </button>
      </form>
    </section>
  );
}