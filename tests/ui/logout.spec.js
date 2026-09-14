const { test, expect } = require('../../src/fixtures/testFixtures');

test.describe('Logout', () => {

  test('logged-in user can logout successfully', async ({
    loginPage,
    header,
    page
  }) => {

    await loginPage.goto();

    await loginPage.login(
      process.env.DEMO_EMAIL,
      process.env.DEMO_PASSWORD
    );

    await header.logout();

    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
  });

});
