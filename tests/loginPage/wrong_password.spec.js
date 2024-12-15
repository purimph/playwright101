const { test, expect } = require('@playwright/test');
const { loginPage } = require("../../pages/login-page");

test('when user fill wrong password', async ({ page }) => {
    const login = new loginPage(page);
    const dataTest = {
        email: "jill@odds.team",
        password: "12345677",
    }

    await login.gotoLoginPage();
    await login.fillEmail(dataTest.email);
    await login.fillPassword(dataTest.password);
    await login.clickLoginButton();
    await login.showModalInvalid();
})
