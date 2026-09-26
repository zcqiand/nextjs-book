// 单个动态段
export function generateStaticParams() {
  return [
    { taskId: '101' },
    { taskId: '102' },
    { taskId: '103' },
  ];
}

// 多个动态段
export function generateStaticParams() {
  return [
    { boardId: 'design-refresh', taskId: '101' },
    { boardId: 'design-refresh', taskId: '102' },
    { boardId: 'mobile-app', taskId: '103' },
  ];
}