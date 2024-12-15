const {test, expect} = require('@playwright/test');
const { loginPage } = require("../../pages/login-page");

test('user not fill in usename and password', async ({ page }) => {
    const login = new loginPage(page);

    await login.gotoLoginPage();
    await login.clickLoginButton();
    await login.showModalNotFill();
})