import { NextRequest, NextResponse } from 'next/server';
import { createTask, fetchTasks } from '@/lib/data';

// 升级点：参数类型从 Request 换成 NextRequest，
// nextUrl 上直接挂着解析好的 URLSearchParams，省掉手动 new URL 的样板
export async function GET(request: NextRequest) {
  const tasks = await fetchTasks();
  // ?status= 是可选过滤参数：不带该参数（get 返回 null）时返回全量列表
  const status = request.nextUrl.searchParams.get('status');
  if (status !== null) {
    const filtered = tasks.filter((task) => task.status === status);
    return NextResponse.json(filtered);
  }
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (typeof body.title !== 'string' || body.title.trim() === '') {
    return NextResponse.json({ error: 'title 不能为空' }, { status: 400 });
  }

  const task = await createTask({
    title: body.title.trim(),
    assigneeId: typeof body.assigneeId === 'string' ? body.assigneeId : 'm-001',
  });

  return NextResponse.json(task, { status: 201 });
}