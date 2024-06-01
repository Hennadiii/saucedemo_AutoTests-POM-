import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';

describe('Valid Login', () => {
  it('should log in with valid credentials and redirect to inventory page', async () => {
    // Відкриваємо сайт
    await browser.url('https://www.saucedemo.com/');

    // Логін користувача
    await LoginPage.login('standard_user', 'secret_sauce');

    // Переконуємось, що сторінка інвентарю завантажена
    await InventoryPage.isLoaded();

    // Перевірка сторінки інвентарю
    await InventoryPage.validateInventoryPage();
  });
});
