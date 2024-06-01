class CheckoutStepOnePage {
  get firstNameInput() {
    return $('#first-name');
  }
  get lastNameInput() {
    return $('#last-name');
  }
  get postalCodeInput() {
    return $('#postal-code');
  }
  get continueButton() {
    return $('#continue');
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }
}

export default new CheckoutStepOnePage();
