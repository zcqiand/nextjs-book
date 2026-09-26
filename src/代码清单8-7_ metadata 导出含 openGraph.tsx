// src/app/tasks/[id]/page.tsx，在清单 8-1 的基础上，文件顶部补这两段
import type { Metadata } from 'next';

// 静态导出足够演示分享卡片；如果标题、描述要按每个任务动态拼出来，
// 换成 generateMetadata 函数即可（入参同样是 await 解包的 params），思路一致
export const metadata: Metadata = {
  title: '任务详情 — Taskflow Board',
  description: '查看任务的封面、状态与最新进展。',
  openGraph: {
    title: '任务详情 — Taskflow Board',
    description: '查看任务的封面、状态与最新进展。',
    // 分享到社交平台时展示的卡片图，文件放在 public/covers/share-card.png
    images: ['/covers/share-card.png'],
  },
};