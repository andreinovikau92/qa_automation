class HomePage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('div#topPanel a .logo');
        this.logInButton = page.locator('div.login input.button');
        this.userNameField = page.locator('div.login .input[name="username"]');
        this.getRegisterLink = page.locator('a[href="register.htm"]');
    }

    async open() {
        await this.page.goto('/');
    }

    async clickRegisterLink() {
        await this.getRegisterLink.click();
    }
}

export default HomePage;