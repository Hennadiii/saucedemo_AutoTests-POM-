class CheckoutStepTwoPage {
  get finishButton() {
    return $('#finish');
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
}

export default new CheckoutStepTwoPage();
