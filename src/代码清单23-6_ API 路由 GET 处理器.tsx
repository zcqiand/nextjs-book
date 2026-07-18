// src/app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
  });
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content } = body;

  if (!title || !content) {
    return NextResponse.json(
      { error: '标题和内容不能为空' },
      { status: 400 }
    );
  }

  const post = await db.post.create({
    data: { title, content },
  });

  return NextResponse.json(post, { status: 201 });
}