import {test} from '@playwright/test'

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:64960/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
})


test('Locator Syntax Rules', async({page}) => {
   //by tag name
    await page.locator('input').first().click()  //method click() returns a promise so we need to use await before

   //by ID
   page.locator('#inputEmail1') // locator is not a promise so don't need using 'await'

   //by Class value
   page.locator('.shape-rectangle')

   //by attribute
   page.locator('[placeholder="Email"]')

   //by Class value(full)

   page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition]')

   //combine different selctors

   page.locator('input[placeholder="Email"][nbinput]') //not space between

   //by Xpath (Not recommended) // https://playwright.dev/docs/other-locators#xpath-locator
   page.locator('//*[@id="inputEmail1"]')

   //by partial text match
   page.locator(':text("Using")')

   //by exact text match
   page.locator(':text-is("Using the Grid")')

   //run in UI mode: npx playwright test --ui



})



