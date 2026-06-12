import { test, expect } from '@playwright/test';

test('open example.com', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  console.log(`Page Title: ${title}`);
  await expect(page).toHaveTitle(/Example Domain/);
});
