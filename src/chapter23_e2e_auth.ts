// 从第 23 章提取
// 代码清单: e2e/auth.spec.ts
// 文件名: chapter23_e2e_auth.ts
// e2e/auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('认证流程', () => {
  test('注册新用户', async ({ page }) => {
    await page.goto('/register');

    await page.fill('[name="name"]', '测试用户');
    await page.fill('[name="email"]', `test${Date.now()}@example.com`);
    await page.fill('[name="password"]', 'Password123');
    await page.fill('[name="confirmPassword"]', 'Password123');

    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/login');
    await expect(page.locator('.alert-success')).toContainText('注册成功');
  });

  test('登录成功', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="password"]', 'Password123');

    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/');
    await expect(page.locator('text=测试用户')).toBeVisible();
  });

  test('登录失败显示错误', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[name="email"]', 'wrong@example.com');
    await page.fill('[name="password"]', 'wrongpassword');

    await page.click('button[type="submit"]');

    await expect(page.locator('.alert-error')).toContainText('邮箱或密码错误');
  });
});
