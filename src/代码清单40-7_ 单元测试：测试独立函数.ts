// 单元测试：测试独立函数
describe('formatDate', () => {
  it('格式化中文日期', () => {
    expect(formatDate(new Date('2024-01-15'), 'zh-CN')).toBe('2024年1月15日');
  });
});

// 集成测试：测试 API 路由
describe('GET /api/posts', () => {
  it('返回文章列表', async () => {
    const response = await request(app).get('/api/posts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

// E2E 测试：测试完整用户流程
test('用户可以创建、编辑和删除文章', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="password"]', 'password');
  await page.click('button[type="submit"]');

  await page.goto('/posts/new');
  await page.fill('[name="title"]', '测试文章');
  await page.fill('[name="content"]', '这是测试内容');
  await page.click('button[type="submit"]');

  await expect(page.locator('h1')).toContainText('测试文章');
});