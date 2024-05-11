import { test, expect } from '@playwright/test';

test('user submits the form', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await expect(page).toHaveTitle(/DEMOQA/);

  await page.fill('input#userName', 'John Doe');
  await page.fill('input#userEmail', 'test@gmail.com');
  await page.fill('textarea#currentAddress', '123 Main St');
  await page.fill('textarea#permanentAddress', '456 Elm St');
  await page.click('button#submit');

  expect(await page.innerText('p#name')).toBe('Name:John Doe');
});
