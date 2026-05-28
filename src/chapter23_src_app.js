// 从第 23 章提取
// 代码清单: src/app/__tests__/posts.test.tsx
// 文件名: chapter23_src_app.js
// src/app/__tests__/posts.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server, HttpResponse, http } from 'msw/node';
import PostsPage from '../page';

describe('PostsPage', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('显示文章列表', async () => {
    render(<PostsPage />);

    await waitFor(() => {
      expect(screen.getByText('第一篇')).toBeInTheDocument();
    });
  });

  it('处理加载错误', async () => {
    server.use(
      http.get('/api/posts', () => {
        return HttpResponse.json({ error: '服务器错误' }, { status: 500 });
      })
    );

    render(<PostsPage />);

    await waitFor(() => {
      expect(screen.getByText('加载失败')).toBeInTheDocument();
    });
  });
});
