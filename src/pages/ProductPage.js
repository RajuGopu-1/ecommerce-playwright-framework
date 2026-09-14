class ProductPage {
  constructor(page) {
    this.page = page;

    this.addToCartButton = page.getByTestId('add-to-cart-21');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = { ProductPage };
