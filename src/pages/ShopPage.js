class ShopPage {
  constructor(page) {
    this.page = page;

    this.mensWear = page.getByTestId('shop-now-mens-wear');
  }

  async openMensWear() {
    await this.mensWear.click();
  }
}

module.exports = { ShopPage };
