export type TaskStatus = 'todo' | 'doing' | 'done';

// 任务对象三字段：id/title/status
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export async function getTasks(): Promise<Task[]> {
  // 这行日志每次调用都会出现：它只证明「函数被调用了」，不证明「请求发出去了」
  console.log('[task-service] 发起 fetch');
  const response = await fetch('http://localhost:3000/api/tasks', {
    // revalidate: 30 保留第 16 章的定时保鲜语义；tags: ['tasks'] 是本章新增：
    // 给这条缓存条目贴上标签，revalidateTag('tasks') 就能在 30 秒窗口未到时提前打穿它。
    // 两个选项可以并存：标签管「提前失效」，秒数管「到点自动过期」，互不冲突
    next: { revalidate: 30, tags: ['tasks'] },
  });
  console.log('[task-service] fetch 返回');
  if (!response.ok) {
    // response.ok 为 false 时 fetch 本身不抛错，必须显式检查，否则错误体会被当成数据渲染
    throw new Error(`任务列表请求失败：HTTP ${response.status}`);
  }
  return response.json();
}