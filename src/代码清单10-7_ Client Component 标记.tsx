// app/dashboard/template.tsx
'use client';

import { useEffect } from 'react';
import { initChatWidget } from 'third-party-chat';

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 每次进入仪表盘时重新初始化聊天组件
    initChatWidget();
  }, []);

  return <div>{children}</div>;
}