class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstNameInput = page.getByTestId('checkout-firstname-input');
    this.lastNameInput = page.getByTestId('checkout-lastname-input');
    this.emailInput = page.getByTestId('checkout-email-input');
    this.phoneInput = page.getByTestId('checkout-phone-input');
    this.addressInput = page.getByTestId('checkout-address-input');
    this.stateInput = page.getByTestId('checkout-state-input');
    this.cityInput = page.getByTestId('checkout-city-input');
    this.pincodeInput = page.getByTestId('checkout-pincode-input');
    this.continueButton = page.getByTestId('continue-btn');
  }

  async fillBillingDetails(data) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.phoneInput.fill(data.phone);
    await this.addressInput.fill(data.address);
    await this.stateInput.fill(data.state);
    await this.cityInput.fill(data.city);
    await this.pincodeInput.fill(data.pincode);
  }

  async continueToConfirmation() {
    await this.continueButton.click();
  }
}

module.exports = { CheckoutPage };
