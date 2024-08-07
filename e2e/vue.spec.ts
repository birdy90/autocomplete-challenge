import { expect, test } from '@playwright/test'

test('example test', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('Hello world')
})
