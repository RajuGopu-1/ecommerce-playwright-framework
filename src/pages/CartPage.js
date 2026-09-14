class CartPage {
  constructor(page) {
    this.page = page;

    this.cartLink = page.getByTestId('header-cart-link');
    this.quantityInput = page.getByTestId('cart-qty-21');
    this.checkoutButton = page.getByTestId('proceed-to-checkout-btn');
  }

  async openCart() {
    await this.cartLink.click();
  }

  async updateQuantity(quantity) {
    await this.quantityInput.fill(String(quantity));
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
