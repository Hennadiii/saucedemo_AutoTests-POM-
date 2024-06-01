class LoginPage {
  get usernameInput() {
    return $('#user-name');
  }
  get passwordInput() {
    return $('#password');
  }
  get loginButton() {
    return $('#login-button');
  }
  get errorMessage() {
    return $('.error-message-container');
  }

  async open() {
    await browser.url('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async areFieldsEmpty() {
    const usernameValue = await this.usernameInput.getValue();
    const passwordValue = await this.passwordInput.getValue();
    return usernameValue === '' && passwordValue === '';
  }

  async getErrorMessage() {
    await this.errorMessage.waitForDisplayed({ timeout: 5000 });
    return this.errorMessage.getText();
  }
}

export default new LoginPage();
