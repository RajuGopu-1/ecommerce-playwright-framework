const { test, expect } = require('../../src/fixtures/testFixtures');

test.describe('Authentication Negative Scenarios', () => {

  test('invalid credentials should not allow login', async ({ loginPage, page }) => {
    await loginPage.goto();

    await loginPage.login(
      'invalid@example.com',
      'invalid-password'
    );

    await expect(page).toHaveURL(/index\.php/);
    await expect(loginPage.emailInput).toBeVisible();
  });

});
