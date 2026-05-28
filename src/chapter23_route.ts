// 从第 23 章提取
// 代码清单: src/app/api/posts/__tests__/route.test.ts
// 文件名: chapter23_route.ts
// src/app/api/posts/__tests__/route.test.ts
import { NextRequest } from 'next/server';
import { GET, POST } from '../route';

// Mock 数据库
jest.mock('@/lib/db', () => ({
  db: {
    post: {
      findMany: jest.fn(),
      create: jest.fn(),
    },
  },
}));

describe('GET /api/posts', () => {
  it('返回文章列表', async () => {
    const mockPosts = [
      { id: '1', title: '第一篇', content: '内容1' },
      { id: '2', title: '第二篇', content: '内容2' },
    ];

    require('@/lib/db').db.post.findMany.mockResolvedValue(mockPosts);

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual(mockPosts);
  });
});

describe('POST /api/posts', () => {
  it('创建文章成功', async () => {
    const mockPost = { id: '1', title: '新文章', content: '新内容' };
    require('@/lib/db').db.post.create.mockResolvedValue(mockPost);

    const request = new NextRequest('http://localhost/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title: '新文章', content: '新内容' }),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data).toEqual(mockPost);
  });

  it('缺少必填字段返回错误', async () => {
    const request = new NextRequest('http://localhost/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title: '只有标题' }),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });
});
