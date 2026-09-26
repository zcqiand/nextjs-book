export interface Task {
  id: number; title: string; assignee: string;
  status: 'todo' | 'doing' | 'done';
}
const tasks: Task[] = [
  { id: 101, title: '登录页适配', status: 'doing', assignee: '陈晓' },
  { id: 102, title: '看板拖拽排序', status: 'todo', assignee: '林岚' },
  { id: 103, title: '周报导出 PDF', status: 'done', assignee: '陈晓' },
];
// 模拟慢接口：这样 loading.js 才有机会登场（Next.js 约定：段内数据 pending 时自动展示 loading.tsx）
const TASK_LIST_DELAY_MS = 1500;
export async function getTasks(): Promise<Task[]> {
  await new Promise((resolve) => setTimeout(resolve, TASK_LIST_DELAY_MS));
  return tasks;
}
// 单查 0 延迟：快慢接口并存更贴近真实系统
export const getTaskById = async (id: number): Promise<Task | undefined> =>
  tasks.find((task) => task.id === id);