import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';

describe('Footer Links', () => {
  before(async () => {
    // Відкриваємо сайт
    await LoginPage.open();

    // Логін користувача
    await LoginPage.login('standard_user', 'secret_sauce');

    // Переконуємось, що сторінка інвентарю завантажена
    await InventoryPage.isLoaded();
  });

  it('should open Twitter link in a new tab', async () => {
    await InventoryPage.openTwitterLink();
    const handles = await browser.getWindowHandles();
    expect(handles.length).toBe(2);

    await browser.switchToWindow(handles[1]);
    const url = await browser.getUrl();
    expect(url).toContain('x.com/saucelabs');
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
  });

  it('should open Facebook link in a new tab', async () => {
    await InventoryPage.openFacebookLink();
    const handles = await browser.getWindowHandles();
    expect(handles.length).toBe(2);

    await browser.switchToWindow(handles[1]);
    const url = await browser.getUrl();
    expect(url).toContain('facebook.com/saucelabs');
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
  });

  it('should open LinkedIn link in a new tab', async () => {
    await InventoryPage.openLinkedinLink();
    const handles = await browser.getWindowHandles();
    expect(handles.length).toBe(2);

    await browser.switchToWindow(handles[1]);
    const url = await browser.getUrl();
    expect(url).toContain('linkedin.com/company/sauce-labs');
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
  });
});
