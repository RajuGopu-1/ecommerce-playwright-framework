class HeaderComponent {
  constructor(page) {
    this.page = page;

    this.cartLink = page.getByTestId('header-cart-link');
    this.logoutButton = page.getByTestId('header-logout-btn');
  }

  async openCart() {
    await this.cartLink.click();
  }

  async logout() {
    await this.logoutButton.click();
  }
}

module.exports = { HeaderComponent };
