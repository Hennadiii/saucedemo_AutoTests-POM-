import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';
import CartPage from '../pageobjects/CartPage.js';

describe('Checkout without products', () => {
  before(async () => {
    // Відкриваємо сайт
    await LoginPage.open();

    // Логін користувача
    await LoginPage.login('standard_user', 'secret_sauce');

    // Переконуємось, що сторінка інвентарю завантажена
    await InventoryPage.isLoaded();

    // Переходимо до кошика
    await InventoryPage.goToCart();
  });

  it('should remain on the Cart page and show no items when trying to checkout with an empty cart', async () => {
    // Спробуємо почати процес checkout
    await CartPage.startCheckout();

    // Переконаємось, що ми залишились на сторінці кошика
    await expect(browser).toHaveUrlContaining('cart.html');

    // Перевіримо, що кошик порожній (немає товарів)
    const cartItems = await CartPage.getCartItems();
    expect(cartItems.length).toBe(0);
  });
});
