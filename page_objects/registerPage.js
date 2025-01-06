class RegisterPage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('h1.title');
        this.firstNameField = page.locator('input[name="customer.firstName"]');
        this.lastNameField = page.locator('input[name="customer.lastName"]');
        this.adressField = page.locator('input[name="customer.address.street"]');
        this.cityField = page.locator('input[name="customer.address.city"]');
        this.stateField = page.locator('input[name="customer.address.state"]');
        this.zipField = page.locator('input[name="customer.address.zipCode"]');
        this.phoneField = page.locator('input[name="customer.phoneNumber"]');
        this.ssnField = page.locator('input[name="customer.ssn"]');
        this.usernameField = page.locator('input[name="customer.username"]');
        this.passwordField = page.locator('input[name="customer.password"]');
        this.confirmPasswordField = page.locator('input[name="repeatedPassword"]');
        this.registerBtn = page.locator('.login input.button');
    }
}

export default RegisterPage;