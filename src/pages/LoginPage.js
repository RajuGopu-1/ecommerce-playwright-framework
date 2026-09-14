class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.getByTestId('login-email-input');
    this.passwordInput = page.getByTestId('login-password-input');
    this.passwordToggle = page.getByTestId('login-password-toggle');
    this.rememberMe = page.getByTestId('login-remember-me');
    this.loginButton = page.getByTestId('login-submit-btn');
  }

  async goto() {
    await this.page.goto('/index.php');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isLoginPageDisplayed() {
    return await this.emailInput.isVisible();
  }
}

module.exports = { LoginPage };
