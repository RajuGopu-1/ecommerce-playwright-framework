class OrderConfirmationPage {
  constructor(page) {
    this.page = page;

    this.placeOrderButton = page.getByTestId('place-order-btn');
    this.shopAgainButton = page.getByTestId('shop-again-btn');
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async shopAgain() {
    await this.shopAgainButton.click();
  }
}

module.exports = { OrderConfirmationPage };
