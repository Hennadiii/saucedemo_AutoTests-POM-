class CheckoutCompletePage {
  get completeContainer() {
    return $('#checkout_complete_container');
  }

  async isLoaded() {
    await this.completeContainer.waitForDisplayed({ timeout: 5000 });
  }
}

export default new CheckoutCompletePage();
