import LoginPage from '../pageobjects/LoginPage.js';

describe('Login with an invalid password', () => {
  it('should display an error message when login with an invalid password', async () => {
    // Відкриваємо сайт
    await LoginPage.open();

    // Вводимо дійсний логін і недійсний пароль
    await LoginPage.login('standard_user', 'invalid_password');

    // Переконуємось, що з'явилось повідомлення про помилку
    const errorMessage = await LoginPage.getErrorMessage();
    expect(errorMessage).toContain(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});
