const {expect} = require('@playwright/test');

exports.homePage = class homePage {
    constructor(page) {
        this.page = page;
    }

    async showModalSuccessLogin() {
        await expect(this.page.getByTestId("login-success-notification")).toBeVisible();
    }
}