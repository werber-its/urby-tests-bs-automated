const { expect, test } = require('@playwright/test');
const sleep = require('util').promisify(setTimeout)
test('BStack local is working', async ({ browser }) => {

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 } 
  });
  const page = await context.newPage();

  await page.goto('https://urby-nuxt.vercel.app/');
  await page.locator('span').filter({ hasText: 'Locations' }).click();
  await page.getByRole('link', { name: 'Dallas, TX' }).click();
  await page.getByRole('link', { name: 'Apartment Features' }).click();
  await page.getByRole('link', { name: 'Amenities' }).click();
  await page.getByRole('link', { name: 'Furnished' }).click();
  await page.getByRole('link', { name: 'Culture' }).click();
  await page.getByRole('link', { name: 'Availability' }).click();
  await page.waitForSelector('.grid');

  // Get all card links within the grid
  const cardLinks = await page.$$eval('.floorplan-card-link', links => links.map(link => link.href));

  // Iterate through each card link
  for (const link of cardLinks) {
    // Navigate to the card's link
    await page.goto(link);

    // Perform actions on the card's page
    // Example: Checking if certain elements are present
    // await expect(page.locator('yourElementSelector')).toBeVisible();

    // Optional: Perform additional navigations or actions on the card page
    
    await page.waitForSelector('.info-container');
    const iframeLocator = page.frameLocator('iframe[title="Matterport"]');
    await expect(iframeLocator).toBeVisible();

    // Optionally, check the src attribute if needed
    const srcValue = await iframeLocator.getAttribute('src');
    expect(srcValue).toContain('https://my.matterport.com/show/?m=');

    // Navigate back to the listings page
    // Note: If the back navigation doesn't work as intended, you might need to navigate directly to the listings page URL instead
    await page.getByRole('link', { name: 'Availability' }).click();
  }
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: 'Book Now' }).click();
  await page.locator('#header').getByRole('link', { name: 'Urby Logo' }).click();
  await page.locator('span').filter({ hasText: 'Locations' }).click();
  await page.getByRole('link', { name: 'Harrison, NJ' }).click();
  await page.getByRole('link', { name: 'Apartment Features' }).click();
  await page.getByRole('link', { name: 'Amenities' }).click();
  await page.getByRole('link', { name: 'Furnished' }).click();
  await page.getByRole('link', { name: 'Culture' }).click();
  await page.getByRole('link', { name: 'Availability' }).click();
  for (const link of cardLinks) {
    // Navigate to the card's link
    await page.goto(link);

    // Perform actions on the card's page
    // Example: Checking if certain elements are present
    // await expect(page.locator('yourElementSelector')).toBeVisible();

    // Optional: Perform additional navigations or actions on the card page
    
    await page.waitForSelector('.info-container');
    // Navigate back to the listings page
    // Note: If the back navigation doesn't work as intended, you might need to navigate directly to the listings page URL instead
    await page.getByRole('link', { name: 'Availability' }).click();
  }
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: 'Book Now' }).click();
  await page.getByLabel('toggle button').click();
  await page.getByRole('link', { name: 'Jersey City, NJ' }).click();
  await page.getByRole('link', { name: 'Apartment Features' }).click();
  await page.getByRole('link', { name: 'Amenities' }).click();
  await page.getByRole('link', { name: 'Furnished' }).click();
  await page.getByRole('link', { name: 'Culture' }).click();
  await page.getByRole('link', { name: 'Availability' }).click();
  for (const link of cardLinks) {
    // Navigate to the card's link
    await page.goto(link);

    // Perform actions on the card's page
    // Example: Checking if certain elements are present
    // await expect(page.locator('yourElementSelector')).toBeVisible();

    // Optional: Perform additional navigations or actions on the card page
    
    await page.waitForSelector('.info-container');
    // Navigate back to the listings page
    // Note: If the back navigation doesn't work as intended, you might need to navigate directly to the listings page URL instead
    await page.getByRole('link', { name: 'Availability' }).click();
  }
  await page.getByRole('link', { name: 'Schedule A Tour' }).click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByText('jersey city', { exact: true }).click();
  await page.getByRole('link', { name: 'Newark, NJ' }).click();
  await page.locator('#essentials-highlights').getByRole('link', { name: 'Learn More' }).click();
  await page.getByRole('link', { name: 'Apartment Features' }).click();
  await page.getByRole('link', { name: 'Culture' }).click();
  await page.getByRole('link', { name: 'Availability' }).click();
  for (const link of cardLinks) {
    // Navigate to the card's link
    await page.goto(link);

    // Perform actions on the card's page
    // Example: Checking if certain elements are present
    // await expect(page.locator('yourElementSelector')).toBeVisible();

    // Optional: Perform additional navigations or actions on the card page
    
    await page.waitForSelector('.info-container');
    // Navigate back to the listings page
    // Note: If the back navigation doesn't work as intended, you might need to navigate directly to the listings page URL instead
    await page.getByRole('link', { name: 'Availability' }).click();
  }
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: 'Book Now' }).click();
  await page.locator('div').filter({ hasText: 'Availability' }).nth(4).click();
  await page.getByRole('link', { name: 'Wynwood, FL' }).click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.locator('#header').getByRole('link', { name: 'Urby Logo' }).click();
  await page.locator('span').filter({ hasText: 'Locations' }).click();
  await page.getByRole('link', { name: 'Fishtown, PA' }).click();
  await page.getByLabel('toggle button').click();
  await page.getByRole('link', { name: 'Harrison, NJ' }).click();
  await page.getByRole('link', { name: 'Availability' }).click();
  for (const link of cardLinks) {
    // Navigate to the card's link
    await page.goto(link);

    // Perform actions on the card's page
    // Example: Checking if certain elements are present
    // await expect(page.locator('yourElementSelector')).toBeVisible();

    // Optional: Perform additional navigations or actions on the card page
    
    await page.waitForSelector('.info-container');
    // Navigate back to the listings page
    // Note: If the back navigation doesn't work as intended, you might need to navigate directly to the listings page URL instead
    await page.getByRole('link', { name: 'Availability' }).click();
  }
  await page.getByLabel('toggle button').click();
  await page.getByRole('link', { name: 'Stamford, CT' }).click();
  await page.getByRole('link', { name: 'Availability' }).click();
  for (const link of cardLinks) {
    // Navigate to the card's link
    await page.goto(link);

    // Perform actions on the card's page
    // Example: Checking if certain elements are present
    // await expect(page.locator('yourElementSelector')).toBeVisible();

    // Optional: Perform additional navigations or actions on the card page
    
    await page.waitForSelector('.info-container');
    // Navigate back to the listings page
    // Note: If the back navigation doesn't work as intended, you might need to navigate directly to the listings page URL instead
    await page.getByRole('link', { name: 'Availability' }).click();
  }

  await page.getByLabel('toggle button').click();
  await page.getByRole('link', { name: 'Staten Island, NY' }).click();
  await page.getByRole('link', { name: 'Availability' }).click();
  for (const link of cardLinks) {
    // Navigate to the card's link
    await page.goto(link);

    // Perform actions on the card's page
    // Example: Checking if certain elements are present
    // await expect(page.locator('yourElementSelector')).toBeVisible();

    // Optional: Perform additional navigations or actions on the card page
    
    await page.waitForSelector('.info-container');
    // Navigate back to the listings page
    // Note: If the back navigation doesn't work as intended, you might need to navigate directly to the listings page URL instead
    await page.getByRole('link', { name: 'Availability' }).click();
  }

  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.goto('https://urby-nuxt.vercel.app/contact-us?city=harrison');
});
