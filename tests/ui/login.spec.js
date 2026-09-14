const { test, expect } = require('../../src/fixtures/testFixtures');

test.describe('Authentication', () => {
  test('valid user can login successfully', async ({ loginPage, shopPage, page }) => {
    await loginPage.goto();

    await loginPage.login(
      process.env.DEMO_EMAIL,
      process.env.DEMO_PASSWORD
    );

    await expect(page).toHaveURL(/shop\.php/);
    await expect(shopPage.mensWear).toBeVisible();
  });
});
