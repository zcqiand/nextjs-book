// 从第 36 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter36_POST.tsx
// src/app/api/revalidate/route.ts
import { revalidateTag, revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const { tag, path } = await request.json();

  if (tag) {
    revalidateTag(tag);
  }

  if (path) {
    revalidatePath(path);
  }

  return NextResponse.json({ revalidated: true });
}
