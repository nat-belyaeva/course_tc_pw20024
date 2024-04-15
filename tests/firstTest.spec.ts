import {test} from '@playwright/test'
//not use very often
// test.beforeAll(() => {
//
// })
//only
//skip

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/')
})

// test.afterEach()
// test.afterAll()

test.describe.only('suite1', async() => {
   test.beforeEach(async ({page}) => {
      await page.locator('[title="Charts"]').click()
    })

    test('the first test', async ({page}) => { //new page open
      await page.getByText('Form Layouts').click()
   })

   test('navigate to datePicker page', async ({page}) => { //new page open
      await page.getByText('DatePicker').click()
   })
})

test.describe('suite2', async() => {
   test.beforeEach(async ({page}) => {
      await page.getByText('Forms').click()
    })

    test('the first test', async ({page}) => { //new page open
      await page.getByText('Form Layouts').click()
   })

   test('navigate to datePicker page', async ({page}) => { //new page open
      await page.getByText('DatePicker').click()
   })
})


