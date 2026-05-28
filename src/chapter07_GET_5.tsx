// 从第 7 章提取
// 代码清单: API 路由 GET 处理器
// 文件名: chapter07_GET_5.tsx
// src/app/api/comments/route.ts
import { NextResponse } from 'next/server';

const comments = [
  {
    id: '1',
    postSlug: 'nextjs-15-announcement',
    author: '前端开发者',
    content: '期待已久的新特性！',
    date: '2024-10-02',
  },
  {
    id: '2',
    postSlug: 'nextjs-15-announcement',
    author: '全栈工程师',
    content: '瞪羚状态听起来很棒，的性能提升。',
    date: '2024-10-03',
  },
  {
    id: '3',
    postSlug: 'app-router-complete-guide',
    author: 'React爱好者',
    content: 'App Router 真的很强大，文章写得很清楚。',
    date: '2024-09-16',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postSlug = searchParams.get('postSlug');

  if (!postSlug) {
    return NextResponse.json({ error: 'postSlug is required' }, { status: 400 });
  }

  const filteredComments = comments.filter(c => c.postSlug === postSlug);

  return NextResponse.json(filteredComments);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.author || !body.content || !body.postSlug) {
      return NextResponse.json(
        { error: 'author, content and postSlug are required' },
        { status: 400 }
      );
    }

    const newComment = {
      id: String(Date.now()),
      postSlug: body.postSlug,
      author: body.author,
      content: body.content,
      date: new Date().toISOString().split('T')[0],
    };

    comments.push(newComment);

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}
