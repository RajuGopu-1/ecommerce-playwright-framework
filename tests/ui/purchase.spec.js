const { test, expect } = require('../../src/fixtures/testFixtures');
const { testData } = require('../../src/data/testData');

test.describe('E-Commerce Purchase Flow', () => {

  test('user can purchase a product successfully', async ({
    loginPage,
    shopPage,
    productPage,
    cartPage,
    checkoutPage,
    orderConfirmationPage,
    page
  }) => {

    // Login
    await loginPage.goto();
    await loginPage.login(
      process.env.DEMO_EMAIL,
      process.env.DEMO_PASSWORD
    );

    await expect(page).toHaveURL(/shop\.php/);

    // Navigate to Men's Wear
    await shopPage.openMensWear();

    // Add Black T-Shirt to cart
    await productPage.addToCart();

    // Open cart
    await cartPage.openCart();

    // Verify cart quantity
    await expect(cartPage.quantityInput).toHaveValue('1');

    // Proceed to checkout
    await cartPage.proceedToCheckout();

    // Verify mandatory field validation
    await checkoutPage.continueToConfirmation();

    await expect(
      page.getByText('Please enter your first name.')
    ).toBeVisible();

    // Fill billing details
    await checkoutPage.fillBillingDetails(testData.checkout);

    // Continue to confirmation
    await checkoutPage.continueToConfirmation();

    // Verify confirmation page
    await expect(page).toHaveURL(/confirm/i);

    // Place order
    await orderConfirmationPage.placeOrder();

    // Verify successful order
    await expect(page).toHaveURL(/thanks/i);
    await expect(
      page.getByText('Thank You for Your Order!')
    ).toBeVisible();

    await expect(
      page.getByText('Your order has been placed successfully.')
    ).toBeVisible();
  });

});
