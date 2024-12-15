const { test, expect } = require("@playwright/test");
const { loginPage } = require("../../pages/login-page");
const { homePage } = require("../../pages/home-page");

test("login page must be visible", async ({ page }) => {
  const login = new loginPage(page);
  const mainPage = new homePage(page);
  const dataTest = {
    email: "jill@odds.team",
    password: "12345678",
  }

  await login.gotoLoginPage();
  await login.fillEmail(dataTest.email);
  await login.fillPassword(dataTest.password);
  await login.clickLoginButton();
  await mainPage.showModalSuccessLogin();
});
