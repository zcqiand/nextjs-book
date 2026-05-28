// 从第 32 章提取
// 代码清单: API 路由 GET 处理器
// 文件名: chapter32_GET.tsx
// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  // 在这里添加断点
  try {
    const posts = await db.post.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // 调试：检查数据
    console.log('Fetched posts:', posts.length);

    return NextResponse.json(posts);
  } catch (error) {
    // 调试：错误信息
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
