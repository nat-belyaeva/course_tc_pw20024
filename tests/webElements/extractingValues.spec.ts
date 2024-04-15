import {expect, test} from '@playwright/test'

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
})

test('extracting values', async ({page}) => {
//single text value
  const basicForm = page.locator('nb-card').filter({hasText: "Basic Form"})
  const buttonText = await basicForm.locator('button').textContent()
  expect(buttonText).toEqual('Submit') //SSubmit2

  //all text values

  const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents()
  expect(allRadioButtonsLabels).toContain("Option 1")

  //input value например когда ввели имел но его не видно во вкладке элементс

  const emailField = basicForm.getByRole('textbox', {name: "Email"})
  await emailField.fill('test@test.com')

  const emailValue = await emailField.inputValue()
  expect(emailValue).toEqual('test@test.com')

  const placeholderValue = await emailField.getAttribute('placeholder')
  expect(placeholderValue).toEqual('Email')

})
