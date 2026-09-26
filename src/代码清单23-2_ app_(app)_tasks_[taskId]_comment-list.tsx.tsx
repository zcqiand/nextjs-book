'use client';
// 为什么是客户端组件：useOptimistic 是 React 19 的客户端 Hook，
// 提交前注入乐观条目、提交后等待服务端确认，这套时序必须发生在浏览器里。

import { useOptimistic, useRef, startTransition } from 'react';
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

  // useOptimistic(真实数据, 合并函数)：返回 [乐观版列表, 注入函数]。
  // 合并函数描述「乐观条目如何拼进现有列表」：fetchComments 按 createdAt 倒序返回
  // （最新在最前），所以新评论要插到列表最前；乐观状态只在 Transition 悬挂期间存活，
  // Transition 结束后自动回落到真实数据，失败回滚靠的正是这个机制
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    initialComments,
    (current, optimisticComment: Comment) => [optimisticComment, ...current],
  );

  async function handleSubmit(formData: FormData) {
    const rawContent = formData.get('content');
    const content = typeof rawContent === 'string' ? rawContent.trim() : '';
    if (!content) return;

    // 用 startTransition 包住「注入 + 提交」：乐观条目的生命周期与 Transition 绑定，
    // 服务端失败时 Transition 结束，乐观条目随之被撤销；
    // form action 自带 transition 语境，这里显式包裹为兼容手动调用场景
    startTransition(async () => {
      const rawAuthor = formData.get('author');
      addOptimisticComment({
        id: `optimistic-${Date.now()}`, // 临时 id，只用作列表 key，不会写进服务端
        taskId,
        author:
          typeof rawAuthor === 'string' && rawAuthor.trim() ? rawAuthor.trim() : '匿名成员',
        content,
        createdAt: new Date().toISOString(),
      });
      // 先清空输入框再等请求：即使网络慢，用户也能立刻输入下一条评论
      formRef.current?.reset();
      // 后确认：写入交给 Server Action，完成后由 action 内的 revalidate 拉回真实数据
      await createCommentAction(taskId, formData);
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