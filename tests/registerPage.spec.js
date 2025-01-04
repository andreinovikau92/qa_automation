
const {test, expect} = require('@playwright/test');
import HomePage from '../page_objects/homePage';
import RegisterPage from '../page_objects/registerPage';

test.describe('registerPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
        await homePage.clickRegisterLink();
    });

    test('Smoke test', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await expect(registerPage.firstNameField).toBeVisible();
        await expect(registerPage.lastNameField).toBeVisible();
    });
});


