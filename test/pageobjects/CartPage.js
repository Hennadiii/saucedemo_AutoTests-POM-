class CartPage {
  get cartContainer() {
    return $('#cart_contents_container');
  }
  get checkoutButton() {
    return $('#checkout');
  }
  get cartItems() {
    return $$('.cart_item');
  }
  get cartBadge() {
    return $('.shopping_cart_badge');
  }
  get checkoutButton() {
    return $('#checkout');
  }
  get cartItems() {
    return $$('.cart_item');
  } // Селектор для елементів кошика

  async startCheckout() {
    await (await this.checkoutButton).waitForDisplayed();
    await (await this.checkoutButton).click();
  }

  async getCartItems() {
    return await this.cartItems;
  }

  async getCartItemCount() {
    return await this.cartItems.length;
  }

  async isCartBadgeDisplayed() {
    return await this.cartBadge.isDisplayed();
  }

  async open() {
    await browser.url('https://www.saucedemo.com/cart.html');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

export default new CartPage();
