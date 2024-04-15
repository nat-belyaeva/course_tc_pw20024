import {expect, test} from '@playwright/test'

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
})

test('reusing locators', async ({page}) => {
  const basicForm = page.locator('nb-card').filter({hasText: "Basic Form"})
  const emailField = basicForm.getByRole('textbox', {name: "Email"})

  await emailField.fill('test@test.com')
  await basicForm.getByRole('textbox', {name: "Password"}).fill('Welcome123')
  await  basicForm.locator('nb-checkbox').click()
  await basicForm.filter({hasText: "Basic Form"}).getByRole('button').click()

  await expect(emailField).toHaveValue('test@test.com')
})
