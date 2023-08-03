// @ts-check
import {test, expect}  from '@playwright/test';

const LOCALHOST_URL='http://localhost:5173/'
const PREFIX_URL='https://cataas.com/'

test('app de textos y imagenes random', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text =await page.getByRole('paragraph')
  const img =await page.getByRole('img')

  const textcontent=await text.textContent()

  console.log(textcontent)

  const imgsrc=await img.getAttribute('src')

  
  //await expect(textcontent?.length).toBeGreaterThan(0)
  //await expect(imgsrc?.startsWith(PREFIX_URL)).toBeTruthy()


});

