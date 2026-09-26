type TaskStatus = 'todo' | 'doing' | 'done';

// 演示用内存数据：真实项目里这一步换成数据库查询，Route Handler 的结构不变
const tasks: Array<{ id: number; title: string; status: TaskStatus }> = [
  { id: 101, title: '登录页适配', status: 'doing' },
  { id: 102, title: '看板拖拽排序', status: 'todo' },
  { id: 103, title: '周报导出 PDF', status: 'done' },
];

// GET 处理器：Next.js 15 默认不缓存，每个请求都会真实执行下面的函数体
export async function GET() {
  // 这行日志是本章观察缓存的信标：它出现，说明请求真的到达了服务端
  console.log('[route] 收到请求');
  try {
    return Response.json(tasks);
  } catch (error) {
    // 异常兜底：不把内部错误细节原样抛给调用方，只回一个通用错误信息
    console.error('[route] 响应构造失败', error);
    return Response.json({ error: '任务列表暂时不可用' }, { status: 500 });
  }
}