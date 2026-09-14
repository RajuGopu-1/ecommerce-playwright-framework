const { test: base, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ShopPage } = require('../pages/ShopPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { OrderConfirmationPage } = require('../pages/OrderConfirmationPage');
const { HeaderComponent } = require('../components/HeaderComponent');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  shopPage: async ({ page }, use) => {
    await use(new ShopPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  orderConfirmationPage: async ({ page }, use) => {
    await use(new OrderConfirmationPage(page));
  },

  header: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
});

module.exports = { test, expect };
