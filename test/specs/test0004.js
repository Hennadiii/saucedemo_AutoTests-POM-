import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';

describe('Logout', () => {
  it('should logout and redirect to the login page with empty fields', async () => {
    // Відкриваємо сайт
    await LoginPage.open();

    // Логін користувача
    await LoginPage.login('standard_user', 'secret_sauce');

    // Переконуємось, що сторінка інвентарю завантажена
    await InventoryPage.isLoaded();

    // Виконуємо logout
    await InventoryPage.logout();

    // Переконуємось, що користувача перенаправлено на сторінку входу
    await expect(browser).toHaveUrl('https://www.saucedemo.com/');

    // Перевіряємо, що поля для вводу логіну та пароля порожні
    const areFieldsEmpty = await LoginPage.areFieldsEmpty();
    expect(areFieldsEmpty).toBe(true);
  });
});
