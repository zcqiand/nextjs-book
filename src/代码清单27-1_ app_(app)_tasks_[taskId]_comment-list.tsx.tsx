'use client';
// 为什么是客户端组件：乐观注入的时序与三态徽标都必须发生在浏览器里，机制沿用第 23 章。
// 写入通道沿用第 23 章：createCommentAction 的签名与实现零改动，本章只升级界面反馈；
// 强制失败演示同样沿用第 23 章的 [fail] 开关，本文件不重写该行为。

import { useOptimistic, useRef, useState, startTransition } from 'react';
import { createCommentAction } from '@/app/actions/comments';
import type { Comment } from '@/lib/data';

// 发送三态：sending 在途、sent 已确认、failed 已失败
type SendStatus = 'sending' | 'sent' | 'failed';

// 徽标文案与配色集中成一张查表：气泡渲染处只查表，避免 JSX 里堆三元表达式
const statusBadge: Record<SendStatus, { text: string; className: string }> = {
  sending: { text: '发送中…', className: 'bg-slate-100 text-slate-500' },
  sent: { text: '已发送', className: 'bg-emerald-100 text-emerald-700' },
  failed: { text: '发送失败', className: 'bg-rose-100 text-rose-700' },
};

export default function CommentList({
  taskId,
  initialComments,
}: {
  taskId: string;
  initialComments: Comment[];
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 三态为什么用旁路 Record 而不塞进 Comment：Comment 形状由数据层冻结（第 20 章 20.4 节），
  // 往里加 status 字段会波及服务端写入与所有消费方；发送状态是纯界面关注点，
  // 用「乐观条目 id 到状态」的旁路表记录，数据形状与 action 签名零改动
  const [sendStatuses, setSendStatuses] = useState<Record<string, SendStatus>>({});

  // 乐观层沿用第 23 章：乐观值只在 transition 悬挂期间存活，结束后自动归位到真实数据
  // fetchComments 按 createdAt 倒序返回（最新在最前），乐观条目插到列表最前
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    initialComments,
    (current, optimisticComment: Comment) => [optimisticComment, ...current],
  );

  async function handleSubmit(formData: FormData) {
    const rawContent = formData.get('content');
    const content = typeof rawContent === 'string' ? rawContent.trim() : '';
    if (!content) return;

    setErrorMessage(null); // 新一次提交先清掉上一次留下的错误横幅

    // id 先生成再使用：注入乐观层与登记三态靠它对齐同一条气泡
    const optimisticId = `optimistic-${Date.now()}`;

    startTransition(async () => {
      const rawAuthor = formData.get('author');
      addOptimisticComment({
        id: optimisticId,
        taskId,
        author:
          typeof rawAuthor === 'string' && rawAuthor.trim() ? rawAuthor.trim() : '匿名成员',
        content,
        createdAt: new Date().toISOString(),
      });
      // 立刻亮「发送中」：网络越慢徽标停留越久，这正是用户要的感知反馈
      setSendStatuses((prev) => ({ ...prev, [optimisticId]: 'sending' }));

      formRef.current?.reset();
      try {
        // 兼容分支说明：当前写入通道以抛错报告失败（见第 23 章），await 正常返回时得到 void；
        // 宽转型只为让「返回结果对象」的兼容分支通过类型检查，并不断言 action 一定返回对象
        const result = (await createCommentAction(taskId, formData)) as
          | { success: boolean; error?: string }
          | undefined;

        if (result && result.success === false) {
          // 形态二：action 不抛错而是返回结果对象，success=false 同样判为失败
          setSendStatuses((prev) => ({ ...prev, [optimisticId]: 'failed' }));
          setErrorMessage(result.error ?? '评论发送失败，已撤销本次显示，请重试');
          return;
        }
        setSendStatuses((prev) => ({ ...prev, [optimisticId]: 'sent' }));
      } catch {
        // 形态一：await 抛错。回滚不需要手写：抛错令 transition 结束，乐观气泡自动消失
        // （第 23 章的归位机制），catch 只做两件事：登记失败态、把失败翻译成横幅文案
        setSendStatuses((prev) => ({ ...prev, [optimisticId]: 'failed' }));
        setErrorMessage('评论发送失败，已撤销本次显示，请重试');
      }
    });
  }

  return (
    <section className="mt-6">
      <h2 className="mb-2 text-base font-semibold text-slate-800">评论区</h2>
      <ul className="mb-4 grid list-none gap-2 p-0">
        {optimisticComments.map((comment) => {
          const status = sendStatuses[comment.id];
          return (
            <li
              key={comment.id}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2"
            >
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>
                  {comment.author} · {new Date(comment.createdAt).toLocaleString('zh-CN')}
                </span>
                {/* 三态徽标：旁路表里有记录的气泡才挂徽标，确认后的真实评论天然无徽标 */}
                {status && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${statusBadge[status].className}`}
                  >
                    {statusBadge[status].text}
                  </span>
                )}
              </div>
              <div className="mt-1 text-sm text-slate-800">{comment.content}</div>
            </li>
          );
        })}
      </ul>
      {/* 错误横幅：失败的主要可见信号，红色底色让「这条没发出去」一眼可辨 */}
      {errorMessage && (
        <p role="alert" className="mb-2 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
          {errorMessage}
        </p>
      )}
      <form ref={formRef} action={handleSubmit} className="flex gap-2">
        <input
          name="author"
          placeholder="你的名字（可留空）"
          className="w-36 rounded-md border border-slate-300 px-2.5 py-1.5 text-sm"
        />
        <input
          name="content"
          placeholder="写下你的评论"
          className="flex-1 rounded-md border border-slate-300 px-2.5 py-1.5 text-sm"
        />
        <button
          type="submit"
          className="rounded-md bg-slate-800 px-4 py-1.5 text-sm text-white hover:bg-slate-700"
        >
          发送
        </button>
      </form>
    </section>
  );
}