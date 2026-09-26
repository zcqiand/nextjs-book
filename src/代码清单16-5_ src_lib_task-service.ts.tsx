export type TaskStatus = 'todo' | 'doing' | 'done';

// 任务对象三字段：id/title/status
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// revalidate: 30：fetch 结果进 Data Cache 缓存 30 秒，窗口内的重复调用不再发真实网络请求。
// 命中与否的判据不在本文件，而在 Route Handler 那行 [route] 日志
export async function getTasks(): Promise<Task[]> {
  // 这行日志每次调用都会出现：它只证明「函数被调用了」，不证明「请求发出去了」
  console.log('[task-service] 发起 fetch');
  // 自取本项目接口必须写完整地址，端口与 npm run start 的实际端口一致
  const response = await fetch('http://localhost:3000/api/tasks', {
    next: { revalidate: 30 },
  });
  console.log('[task-service] fetch 返回');
  if (!response.ok) {
    // response.ok 为 false 时 fetch 本身不抛错，必须显式检查，否则错误体会被当成数据渲染
    throw new Error(`任务列表请求失败：HTTP ${response.status}`);
  }
  return response.json();
}