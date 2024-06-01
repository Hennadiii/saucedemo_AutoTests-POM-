import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';
import CartPage from '../pageobjects/CartPage.js';
import CheckoutStepOnePage from '../pageobjects/CheckoutStepOnePage.js';
import CheckoutStepTwoPage from '../pageobjects/CheckoutStepTwoPage.js';
import CheckoutCompletePage from '../pageobjects/CheckoutCompletePage.js';

describe('Checkout Process', () => {
  it('should complete the checkout process successfully', async () => {
    // Логін
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');

    // Додаємо товар до корзини
    await InventoryPage.addFirstItemToCart();

    // Переходимо до корзини
    await InventoryPage.goToCart();

    // Переходимо до оформлення замовлення
    await CartPage.proceedToCheckout();

    // Заповнюємо інформацію про покупця
    await CheckoutStepOnePage.fillCheckoutForm('John', 'Doe', '12345');
    await CheckoutStepOnePage.continueCheckout();

    // Перевірка та завершення замовлення
    await CheckoutStepTwoPage.finishCheckout();

    // Перевірка завершення замовлення
    await CheckoutCompletePage.isLoaded();
  });
});
