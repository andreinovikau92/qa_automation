class RegisterPage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('h1.title');
        this.firstNameField = page.locator('input[name="customer.firstName"]');
        this.lastNameField = page.locator('input[name="customer.lastName"]');
    }
}

export default RegisterPage;