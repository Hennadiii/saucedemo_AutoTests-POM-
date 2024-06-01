import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';
import CartPage from '../pageobjects/CartPage.js';

describe('Saving the cart after logout', () => {
  it('should save the cart after logout and login again', async () => {
    // Відкриваємо сайт
    await LoginPage.open();

    // Логін користувача
    await LoginPage.login('standard_user', 'secret_sauce');

    // Переконуємось, що сторінка інвентарю завантажена
    await InventoryPage.isLoaded();

    // Додаємо перший товар до кошика
    await InventoryPage.addFirstItemToCart();

    // Переходимо до кошика та перевіряємо, що товар додано
    await InventoryPage.goToCart();
    await expect(await CartPage.getCartItemCount()).toBe(1);

    // Виконуємо logout
    await InventoryPage.logout();

    // Переконуємось, що користувача перенаправлено на сторінку входу
    await expect(browser).toHaveUrl('https://www.saucedemo.com/');

    // Логін знову
    await LoginPage.login('standard_user', 'secret_sauce');

    // Переконуємось, що сторінка інвентарю завантажена
    await InventoryPage.isLoaded();

    // Переходимо до кошика та перевіряємо, що товар все ще в кошику
    await InventoryPage.goToCart();
    await expect(await CartPage.getCartItemCount()).toBe(1);
  });
});
