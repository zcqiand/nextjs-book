'use client';
// 该文件为何需要是 Client Component：遮罩 onClick、关闭按钮 onClick 都是
// event handler，Server Component 不能绑定事件处理函数，交互必须落在客户端组件里。

import { useRouter } from 'next/navigation';
import type { Task } from '@/lib/data';

const statusText: Record<Task['status'], string> = {
  'todo': '待办',
  'in-progress': '进行中',
  'done': '已完成',
};

export default function TaskModal({
  title,
  status,
  updatedAt,
}: {
  title: string;
  status: Task['status'];
  updatedAt: string;
}) {
  const router = useRouter();
  // 用 router.back() 关闭：回退到列表页的同时模态卸载，比 push 回列表更符合「关闭」语义
  const closeModal = () => router.back();

  return (
    // 全屏遮罩：position fixed + inset 0 铺满视口，点击遮罩任意空白处也可关闭
    <div
      onClick={closeModal}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        background: 'rgba(15, 23, 42, 0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* stopPropagation 防止点击卡片内部时冒泡到遮罩误关模态 */}
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: 12,
          padding: 24,
          width: 400,
          maxWidth: '90%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h2 style={{ margin: '0 0 12px', fontSize: 18 }}>{title}</h2>
        <p style={{ margin: '4px 0', fontSize: 14 }}>状态：{statusText[status]}</p>
        <p style={{ margin: '4px 0 16px', fontSize: 14, color: '#6b7280' }}>
          更新时间：{new Date(updatedAt).toLocaleString('zh-CN')}
        </p>
        <button
          onClick={closeModal}
          style={{
            padding: '8px 20px',
            borderRadius: 8,
            border: 'none',
            background: '#2563eb',
            color: '#ffffff',
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          关闭
        </button>
      </div>
    </div>
  );
}