import { test, expect } from "@playwright/test"

test.beforeEach(async ({page}) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()

  })

  test('auto waiting', async({page}) => {
    const successButton = page.locator('.bg-success')
    await successButton.click()

    //const text = await successButton.textContent()
    // await successButton.waitFor({state: "attached"})
   //  const text = await successButton.allTextContents()  //allTextContent not wait
    // expect(text).toContain('Data loaded with AJAX get request.')
    //expect(text).toEqual('Data loaded with AJAX get request.')
    await expect (successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
  })


  test('alternative waits', async({page}) => {
    const successButton = page.locator('.bg-success')

    //___wait for element
    //await page.waitForSelector('.bg-success')

    //__wait for particular response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    await page.waitForLoadState('networkidle') // network is idle, so playwright will wait until all the API calls in the networking tab

                                                 //of the browser will be completed and only then will move to the next line.
    //    await page.waitForTimeout(5555)

    //__ wait for network calls to be completed('NOT RECOMENDED')

    const text = await successButton.allTextContents  //allTextContent not wait
    expect(text).toContain('Data loaded with AJAX get request.')

  })
