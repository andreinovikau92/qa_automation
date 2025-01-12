
const {test, expect} = require('@playwright/test');
import HomePage from '../page_objects/homePage';
import RegisterPage from '../page_objects/registerPage';

test.describe('registerPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
        await homePage.clickRegisterLink();
    });

    test('Smoke test of the Register page', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await expect(registerPage.firstNameField).toBeVisible();
        await expect(registerPage.lastNameField).toBeVisible();
        await expect(registerPage.adressField).toBeVisible();
        await expect(registerPage.cityField).toBeVisible();
        await expect(registerPage.stateField).toBeVisible();
        await expect(registerPage.zipField).toBeVisible();
        await expect(registerPage.phoneField).toBeVisible();
        await expect(registerPage.ssnField).toBeVisible();
        await expect(registerPage.usernameField).toBeVisible();
        await expect(registerPage.passwordField).toBeVisible();
        await expect(registerPage.confirmPasswordField).toBeVisible();
        await expect(registerPage.registerBtn).toBeVisible();
    });

    test('Verify when the fields are empty and after clicking the Register button the user is not created', async ({ page}) => {
        const registerPage = new RegisterPage(page);
        
        await registerPage.clickRegisterBtn();

        await expect(registerPage.errorMsg).toHaveText('First name is required.');

    });
});


