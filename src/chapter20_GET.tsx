// 从第 20 章提取
// 代码清单: API 路由 GET 处理器
// 文件名: chapter20_GET.tsx
// app/api/github-repos/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json(
      { error: 'username is required' },
      { status: 400 }
    );
  }

  // 从服务端调用外部 API，保护密钥安全
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // 缓存 1 小时
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch repos' },
      { status: response.status }
    );
  }

  const repos = await response.json();
  return NextResponse.json(repos);
}
