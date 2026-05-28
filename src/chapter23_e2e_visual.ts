// 从第 23 章提取
// 代码清单: e2e/visual.spec.ts
// 文件名: chapter23_e2e_visual.ts
// e2e/visual.spec.ts
import { test, expect } from '@playwright/test';

test.describe('视觉回归测试', () => {
  test('首页在桌面端正确渲染', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    await expect(page).toHaveScreenshot('homepage-desktop.png', {
      maxDiffPixelRatio: 0.1,
    });
  });

  test('首页在移动端正确渲染', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      maxDiffPixelRatio: 0.1,
    });
  });
});
