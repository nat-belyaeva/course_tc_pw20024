import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
})

test('assertions', async ({page}) => {

  const basicFormButton = page.locator('nb-card').filter({hasText: "Basic Form"}).locator('button') 
  //general assertions
  const value = 5
  expect(value).toEqual(5)
  
  const text = await basicFormButton.textContent()
  expect(text).toEqual("Submit")

  //Locator assertion
  await expect(basicFormButton).toHaveText('Submit') // 
//because this is a locator assertion, we need to provide await in front of the expect.
//So what will happen here to have text method will search for the text inside of this web element and
//when it finds the expected text, it will make an assertion and also locator assertions has their own timeout.
// So when you use the await, expect and locator assertion, this type of assertion will wait up to five seconds for the element to be available.

//soft Assertion 
//- Soft assertion is a kind of the assertion when the test can be continue the execution even if the assertion
//is failed.
await expect.soft(basicFormButton).toHaveText('Submit')
await basicFormButton.click()

})
