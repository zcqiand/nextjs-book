// src/app/actions/__tests__/posts.test.ts
import { createPost } from '../posts';

// Mock 数据库和缓存
jest.mock('@/lib/db', () => ({
  db: {
    post: {
      create: jest.fn(),
    },
  },
}));

jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}));

describe('createPost', () => {
  it('创建文章成功', async () => {
    const mockPost = { id: '1', title: '测试', content: '内容' };
    require('@/lib/db').db.post.create.mockResolvedValue(mockPost);

    const formData = new FormData();
    formData.set('title', '测试');
    formData.set('content', '内容');

    const result = await createPost(formData);

    expect(result.success).toBe(true);
    expect(result.post).toEqual(mockPost);
    expect(require('next/cache').revalidateTag).toHaveBeenCalledWith('posts');
  });

  it('缺少内容返回错误', async () => {
    const formData = new FormData();
    formData.set('title', '只有标题');

    const result = await createPost(formData);

    expect(result.error).toBe('标题和内容不能为空');
  });
});