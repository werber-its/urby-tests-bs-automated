const { test, expect } = require('@playwright/test');

async function navigateCityAvailability(page, cityName) {
  // Navigate to 'Locations' and select a city
  await page.locator('span').filter({ hasText: 'Locations' }).click();
  await page.getByRole('link', { name: cityName }).click();
  await page.getByRole('link', { name: 'Availability' }).click();
  await page.waitForSelector('.grid');
  // expect grid to exist
  await expect(page.locator('.grid')).toBeVisible();

  // Get all card links within the grid for the current city
  const cardLinks = await page.$$eval('.floorplan-card-link', links => links.map(link => link.href));

  // Iterate through each card link for the current city
  for (const link of cardLinks) {
    await page.goto(link);
    await page.waitForSelector('.info-container');
    await expect(page.locator('.info-container')).toBeVisible();
    const iframeLocator = page.frameLocator('iframe[title="Matterport"]');
    await expect(iframeLocator).toBeVisible();


    await page.getByRole('link', { name: 'Availability' }).click();

  }
}

test('BStack local is working', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  await page.goto('https://urby-nuxt.vercel.app/');

  // Array of cities to iterate through
  const cities = ['Newark, NJ'];

  // Iterate through each city and navigate through its availability
  for (const city of cities) {
    await navigateCityAvailability(page, city);
    // If needed, navigate back to the homepage or reset the state before the next iteration
    await page.goto('https://urby-nuxt.vercel.app/');
  }

  await context.close();
});