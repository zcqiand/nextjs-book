type TaskStatus = 'todo' | 'doing' | 'done';

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// 演示用内存数据：真实项目里这一步换成数据库读写，路由处理器的结构不变
const tasks: Task[] = [
  { id: 101, title: '登录页适配', status: 'doing' },
  { id: 102, title: '看板拖拽排序', status: 'todo' },
  { id: 103, title: '周报导出 PDF', status: 'done' },
];

// GET 处理器：Next.js 15 默认不缓存，每个请求都会真实执行下面的函数体
export async function GET() {
  // 这行日志是第 16 章起沿用的信标：它出现，说明请求真的到达了服务端
  console.log('[route] 收到请求');
  try {
    return Response.json(tasks);
  } catch (error) {
    console.error('[route] 响应构造失败', error);
    return Response.json({ error: '任务列表暂时不可用' }, { status: 500 });
  }
}

interface TaskPatchBody {
  id?: number;
  title?: string;
  status?: TaskStatus;
}

// PATCH 处理器：支持改名与改状态两类局部更新，传哪个字段改哪个字段
export async function PATCH(request: Request) {
  console.log('[route] 收到 PATCH');
  let body: TaskPatchBody;
  try {
    body = (await request.json()) as TaskPatchBody;
  } catch (error) {
    console.error('[route] 请求体解析失败', error);
    return Response.json({ error: '请求体必须是合法 JSON' }, { status: 400 });
  }

  const taskId = Number(body.id);
  if (!taskId) {
    return Response.json({ error: '缺少有效的任务 id' }, { status: 400 });
  }
  // 数组只有三条数据，线性查找足够：演示场景可读性优先于查找性能
  const task = tasks.find((item) => item.id === taskId);
  if (!task) {
    return Response.json({ error: `任务 ${taskId} 不存在` }, { status: 404 });
  }

  if (typeof body.title === 'string' && body.title.trim()) {
    task.title = body.title.trim();
  }
  if (body.status === 'todo' || body.status === 'doing' || body.status === 'done') {
    task.status = body.status;
  }
  return Response.json(task);
}