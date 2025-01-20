import { name } from "../playwright.config";

class HomePage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('div#topPanel a .logo');
        this.logInButton = page.locator('div.login input.button');
        this.userNameField = page.locator('div.login .input[name="username"]');
        this.getRegisterLink = page.locator('a[href="register.htm"]');
        this.getLogInBtn = page.locator('div input.button');
        this.getErrorMsg = page.locator('p.error');
        this.getAboutUsLink = page.getByRole('link', {name: 'About Us'}).first();
    }

    async open() {
        await this.page.goto('/');
    }

    async clickRegisterLink() {
        await this.getRegisterLink.click();
    }

    async clickLogInBtb() {
        await this.getLogInBtn.click();
    }
}

export default HomePage;