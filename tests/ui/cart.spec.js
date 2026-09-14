const { test, expect } = require('../../src/fixtures/testFixtures');

test.describe('Cart', () => {

  test('user can update product quantity in cart', async ({
    loginPage,
    shopPage,
    productPage,
    cartPage
  }) => {

    await loginPage.goto();

    await loginPage.login(
      process.env.DEMO_EMAIL,
      process.env.DEMO_PASSWORD
    );

    await shopPage.openMensWear();

    await productPage.addToCart();

    await cartPage.openCart();

    await expect(cartPage.quantityInput).toHaveValue('1');

    await cartPage.updateQuantity(2);

    await expect(cartPage.quantityInput).toHaveValue('2');
  });

});
