class HomePage {
    constructor(page) {
        this.page = page;
        //this.pageHeader = page.locator('h1.page-title');
        this.pageHeader = page.locator('div#topPanel a .logo');
        this.logInButton = page.locator('div.login input.button');
    }

    async open() {
        await this.page.goto('/');
    }
}

export default HomePage;