import { NextRequest, NextResponse } from 'next/server';
import { fetchComments } from '@/lib/data';
import { createComment } from '@/app/actions/comments';

// GET：按 taskId 查列表，fetchComments 沿用第 20 章，零改动
export async function GET(request: NextRequest) {
  const taskId = request.nextUrl.searchParams.get('taskId');
  if (taskId === null) {
    return NextResponse.json({ error: 'taskId 查询参数不能为空' }, { status: 400 });
  }
  return NextResponse.json(await fetchComments(taskId));
}

// 请求体归一：JSON 来自脚本调用，multipart/form-data 来自原生表单提交，
// 两种来源转成同一份 FormData，createComment 的服务端校验因此只有一套
async function readAsForm(request: NextRequest): Promise<FormData> {
  const form = new FormData();
  const keys = ['taskId', 'author', 'content'] as const;
  const contentType = request.headers.get('content-type') ?? '';
  if (contentType.includes('application/json')) {
    const body = (await request.json()) as Record<string, unknown>;
    for (const key of keys) {
      if (typeof body[key] === 'string') form.set(key, body[key] as string);
    }
    return form;
  }
  const incoming = await request.formData();
  for (const key of keys) {
    const value = incoming.get(key);
    if (typeof value === 'string') form.set(key, value);
  }
  return form;
}

export async function POST(request: NextRequest) {
  let form: FormData;
  try {
    // 请求体解析失败在此拦成 400，不让异常冒泡成 500
    form = await readAsForm(request);
  } catch {
    return NextResponse.json({ error: '请求体解析失败' }, { status: 400 });
  }
  const result = await createComment(form);
  if (!result.success) {
    return NextResponse.json(result, { status: 400 });
  }
  // 201 表示本次请求创建了新资源，与 22.3.2 的 tasks 端点同一口径
  return NextResponse.json(result, { status: 201 });
}