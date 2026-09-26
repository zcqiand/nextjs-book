// 动态流比任务列表更慢：2.5s 延迟才能在页面上看出两个加载边界先后补齐
export interface Activity {
  id: string; actor: string; action: string; taskTitle: string;
}
const ACTIVITY_FEED_DELAY_MS = 2500;
const activities: Activity[] = [
  { id: 'a-001', actor: '陈晓', action: '完成了', taskTitle: '周报导出 PDF' },
  { id: 'a-002', actor: '林岚', action: '开始处理', taskTitle: '登录页适配' },
  { id: 'a-003', actor: '周远', action: '认领了', taskTitle: '看板拖拽排序' },
];
export async function getRecentActivities(): Promise<Activity[]> {
  await new Promise((resolve) => setTimeout(resolve, ACTIVITY_FEED_DELAY_MS));
  return activities;
}