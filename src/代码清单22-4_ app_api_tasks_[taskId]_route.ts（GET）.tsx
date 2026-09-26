import { NextRequest, NextResponse } from 'next/server';
import { getTaskById } from '@/lib/data';

// 第二参数 context 携带动态段的 params：Next.js 15 中它是 Promise，
// 必须 await 后取值，禁止同步解构（page 侧同一口径，见第 5 章）
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ taskId: string }> },
) {
  const { taskId } = await params;
  const task = await getTaskById(taskId);

  if (!task) {
    // 查不到回 404：状态码即接口语义，比「200 加一个 null 响应体」更利于调用方分支
    return NextResponse.json({ error: '任务不存在' }, { status: 404 });
  }

  return NextResponse.json(task);
}