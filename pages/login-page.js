const { expect } = require("@playwright/test");

exports.loginPage = class loginPage {
  constructor(page) {
    this.page = page;
  }

  async gotoLoginPage() {
    await this.page.goto("https://odds-playwright.vercel.app/");
  }

  async fillEmail(username) {
    await this.page.getByTestId("email-input").fill(username);
  }

  async fillPassword(password) {
    await this.page.getByTestId("password-input").fill(password);
  }

  async clickLoginButton() {
    await this.page.getByTestId("login-button").click();
  }

  async showModalInvalid() {
    await expect(
      this.page.getByTestId("login-invalid-notification")
    ).toBeVisible();
  }
  async showModalNotFill() {
    await expect(
      this.page.getByTestId("invalid-value-notification")
    ).toBeVisible();
  }

  async showModalUserSuspended() {
    await expect(
      this.page.getByTestId("login-terminate-notification")
    ).toBeVisible();
  }
};
