// 从第 23 章提取
// 代码清单: e2e/blog.spec.ts
// 文件名: chapter23_e2e_blog.ts
// e2e/blog.spec.ts
import { test, expect } from '@playwright/test';

test.describe('博客功能', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('首页显示文章列表', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('最新文章');
    await expect(page.locator('article')).toHaveCount(10);
  });

  test('点击文章进入详情页', async ({ page }) => {
    const firstArticle = page.locator('article').first();
    const title = await firstArticle.locator('h2').textContent();

    await firstArticle.click();
    await expect(page).toHaveURL(/\/blog\/.+/);
    await expect(page.locator('h1')).toContainText(title);
  });

  test('搜索功能正常工作', async ({ page }) => {
    await page.fill('[name="search"]', 'Next.js');
    await page.click('button[type="submit"]');

    await expect(page.locator('article')).toHaveCount(3);
  });
});
