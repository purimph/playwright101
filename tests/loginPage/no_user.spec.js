const {test, expect} = require('@playwright/test');
const { loginPage } = require("../../pages/login-page");

test('The user entered data that was not in the system.', async ({ page }) => {
    const login = new loginPage(page);

    await login.gotoLoginPage();
    await login.fillEmail("pan@odds.team");
    await login.fillPassword("12345678");
    await login.clickLoginButton();
    await login.showModalInvalid();
})