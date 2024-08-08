import { expect, test } from '@playwright/test'

test('example test', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByLabel('Books')).toBeFocused()
  await expect(page.getByLabel('Cities')).not.toBeFocused()
})
