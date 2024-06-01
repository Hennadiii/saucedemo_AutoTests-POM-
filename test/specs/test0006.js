import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';

describe('Product Sorting', () => {
  before(async () => {
    // Відкриваємо сайт
    await LoginPage.open();

    // Логін користувача
    await LoginPage.login('standard_user', 'secret_sauce');

    // Переконуємось, що сторінка інвентарю завантажена
    await InventoryPage.isLoaded();
  });

  it('should sort products by Price (low to high)', async () => {
    await InventoryPage.sortProducts('Price (low to high)');
    const prices = await InventoryPage.getProductPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);
  });

  it('should sort products by Price (high to low)', async () => {
    await InventoryPage.sortProducts('Price (high to low)');
    const prices = await InventoryPage.getProductPrices();
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sortedPrices);
  });

  it('should sort products by Name (A to Z)', async () => {
    await InventoryPage.sortProducts('Name (A to Z)');
    const names = await InventoryPage.getProductNames();
    const sortedNames = [...names].sort();
    expect(names).toEqual(sortedNames);
  });

  it('should sort products by Name (Z to A)', async () => {
    await InventoryPage.sortProducts('Name (Z to A)');
    const names = await InventoryPage.getProductNames();
    const sortedNames = [...names].sort().reverse();
    expect(names).toEqual(sortedNames);
  });
});
