class InventoryPage {
  get inventoryContainer() {
    return $('#inventory_container');
  }
  get products() {
    return $$('.inventory_item');
  }
  get cartIcon() {
    return $('.shopping_cart_link');
  }
  get firstItemAddToCartButton() {
    return $('.inventory_item:nth-child(1) .btn_primary');
  }
  get burgerMenuButton() {
    return $('#react-burger-menu-btn');
  }
  get logoutLink() {
    return $('#logout_sidebar_link');
  }
  get firstItemAddToCartButton() {
    return $('button.btn_inventory');
  }
  get cartIcon() {
    return $('.shopping_cart_link');
  }
  get sortDropdown() {
    return $('.product_sort_container');
  }
  get inventoryItems() {
    return $$('.inventory_item');
  }
  get twitterLink() {
    return $('a[href="https://twitter.com/saucelabs"]');
  }
  get facebookLink() {
    return $('a[href="https://www.facebook.com/saucelabs"]');
  }
  get linkedinLink() {
    return $('a[href="https://www.linkedin.com/company/sauce-labs/"]');
  }

  async openTwitterLink() {
    await (await this.twitterLink).waitForDisplayed();
    await (await this.twitterLink).click();
  }

  async openFacebookLink() {
    await (await this.facebookLink).waitForDisplayed();
    await (await this.facebookLink).click();
  }

  async openLinkedinLink() {
    await (await this.linkedinLink).waitForDisplayed();
    await (await this.linkedinLink).click();
  }

  async sortProducts(option) {
    await this.sortDropdown.selectByVisibleText(option);
  }

  async getProductNames() {
    const items = await this.inventoryItems;
    const names = [];
    for (const item of items) {
      const name = await item.$('.inventory_item_name').getText();
      names.push(name);
    }
    return names;
  }

  async getProductPrices() {
    const items = await this.inventoryItems;
    const prices = [];
    for (const item of items) {
      const price = await item.$('.inventory_item_price').getText();
      prices.push(parseFloat(price.replace('$', '')));
    }
    return prices;
  }

  async addFirstItemToCart() {
    await this.firstItemAddToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async logout() {
    await this.burgerMenuButton.click();
    await this.logoutLink.click();
  }

  async isLoaded() {
    await this.inventoryContainer.waitForDisplayed({ timeout: 5000 });
  }

  async addFirstItemToCart() {
    await this.firstItemAddToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async validateInventoryPage() {
    await this.isLoaded();
    expect(await this.products.length).toBeGreaterThan(0);
    expect(await this.cartIcon.isDisplayed()).toBe(true);
  }
}

export default new InventoryPage();
