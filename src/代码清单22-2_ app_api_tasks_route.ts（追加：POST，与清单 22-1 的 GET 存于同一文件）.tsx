import { NextResponse } from 'next/server';
import { createTask } from '@/lib/data';

// 与 GET 合入同一文件时，两份清单的 import 合并为一行：
//   import { createTask, fetchTasks } from '@/lib/data';

export async function POST(request: Request) {
  // request.json() 解析 JSON 请求体；调用方发的不是合法 JSON 时这里会抛错，
  // 生产代码应 try/catch 后回 400，本章先聚焦主路径，错误处理在第 26 章系统展开
  const body = await request.json();

  // 服务端校验是唯一可信的校验（第 21 章口径）：绕过页面直接发请求的调用方同样被拦下
  if (typeof body.title !== 'string' || body.title.trim() === '') {
    return NextResponse.json({ error: 'title 不能为空' }, { status: 400 });
  }

  const task = await createTask({
    title: body.title.trim(),
    assigneeId: typeof body.assigneeId === 'string' ? body.assigneeId : 'm-001',
  });

  // 201 Created 是 RESTful 语义中「创建成功」的状态码：
  // 比 200 多传达一层「这条请求产生了新资源」，调用方据此分支更省心
  return NextResponse.json(task, { status: 201 });
}