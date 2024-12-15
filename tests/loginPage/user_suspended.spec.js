const {test, expect} = require('@playwright/test');
const { loginPage } = require("../../pages/login-page");

test('login with suspended user', async ({ page }) => {
    const login = new loginPage(page);
    const dataTest = {
        email: "jdai@odds.team",
        password: "87654321",
    }

    await login.gotoLoginPage();
    await login.fillEmail(dataTest.email);
    await login.fillPassword(dataTest.password);
    await login.clickLoginButton();
    await login.showModalUserSuspended();
})