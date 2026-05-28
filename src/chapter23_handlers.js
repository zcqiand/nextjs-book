// 从第 23 章提取
// 代码清单: src/mocks/handlers.ts
// 文件名: chapter23_handlers.js
// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/posts', () => {
    return HttpResponse.json([
      { id: '1', title: '第一篇', content: '内容1' },
      { id: '2', title: '第二篇', content: '内容2' },
    ]);
  }),

  http.post('/api/posts', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(
      { id: '3', ...body },
      { status: 201 }
    );
  }),
];
