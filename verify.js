const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const filePath = `file://${path.resolve('index.html')}`;
  console.log(`Loading ${filePath}`);
  await page.goto(filePath);

  // Wait a bit for any potential rendering
  await page.waitForTimeout(2000);

  const content = await page.content();
  console.log('Page content snippet:', content.substring(0, 500));

  const title = await page.title();
  console.log('Page title:', title);

  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
