import { test, expect } from '@playwright/test';

test('user logs in', async ({ page }) => {
  await page.goto('https://demoqa.com/login');

  await page.fill('input#userName', 'playwright-template');
  await page.fill('input#password', 'Yuiohjkl4680!');

  await page.click('button#login');

  await expect(page.getByText('playwright-template')).toBeVisible();
});
