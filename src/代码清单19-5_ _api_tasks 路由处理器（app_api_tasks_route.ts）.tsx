// app/api/tasks/route.ts
// 本章只使用路由处理器的最小形态：一个 GET 同名导出；
// 完整规则（方法同名导出、与 page.tsx 互斥等）在第22章系统展开

import { queryTasks, type TaskStatus } from '@/lib/data';

const VALID_STATUSES: TaskStatus[] = ['todo', 'in-progress', 'done'];

export async function GET(request: Request) {
  const statusParam = new URL(request.url).searchParams.get('status');

  // 非法参数直接拦下：让调用方第一时间发现拼错，避免误把空列表当成筛选结果
  if (statusParam !== null && !VALID_STATUSES.includes(statusParam as TaskStatus)) {
    return Response.json({ error: `非法的 status 参数：${statusParam}` }, { status: 400 });
  }

  // 直接读内存数据源（queryTasks），不走 fetchTasks，避免「自己请求自己」的 HTTP 回环
  const tasks = queryTasks(statusParam ?? undefined);
  return Response.json(tasks);
}