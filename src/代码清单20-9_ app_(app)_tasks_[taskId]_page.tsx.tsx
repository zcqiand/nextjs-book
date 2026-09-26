import { notFound } from 'next/navigation';
import { fetchComments, getTaskById } from '@/lib/data';
import { createComment } from '@/app/actions/comments';

// Next.js 15：params 是 Promise，必须 await 后取值（同步解构在类型层直接报错）
export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  // 任务与评论两个数据源互不依赖，Promise.all 并行取，总耗时按最慢的一个算
  const [task, comments] = await Promise.all([
    getTaskById(taskId),
    fetchComments(taskId),
  ]);
  if (!task) {
    notFound(); // 渲染 not-found.tsx，语义比 return null 明确
  }

  return (
    <div>
      <h1 style={{ fontSize: 20, margin: '0 0 8px' }}>{task.title}</h1>
      <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 24px' }}>
        任务编号：{task.id}
      </p>

      <h2 style={{ fontSize: 16, margin: '0 0 12px' }}>评论（{comments.length}）</h2>
      <ul style={{ listStyle: 'none', margin: '0 0 24px', padding: 0, display: 'grid', gap: 12 }}>
        {comments.map((comment) => (
          <li
            key={comment.id}
            style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: 12 }}
          >
            <div style={{ fontSize: 14 }}>
              <strong>{comment.author}</strong>
              <span style={{ color: '#6b7280', marginLeft: 8, fontSize: 12 }}>
                {new Date(comment.createdAt).toLocaleString('zh-CN')}
              </span>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: 14 }}>{comment.content}</p>
          </li>
        ))}
      </ul>

      {/* 表单动作只收到 FormData，taskId 用 hidden input 随表单一起提交：
          createComment 因此保持无闭包、可复用；JS 禁用时的整页提交也会带上
          全部具名字段，两条提交路径拿到同样的 taskId */}
      <form action={createComment} style={{ display: 'grid', gap: 8, maxWidth: 480 }}>
        <input type="hidden" name="taskId" value={task.id} />
        <input
          type="text"
          name="author"
          placeholder="署名（至少 2 个字符）"
          required
          style={{ padding: 8, border: '1px solid #d1d5db', borderRadius: 8 }}
        />
        <textarea
          name="content"
          rows={3}
          placeholder="写下你的评论"
          required
          style={{ padding: 8, border: '1px solid #d1d5db', borderRadius: 8, resize: 'vertical' }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: 8,
            background: '#2563eb',
            color: '#ffffff',
            cursor: 'pointer',
          }}
        >
          提交评论
        </button>
      </form>
    </div>
  );
}