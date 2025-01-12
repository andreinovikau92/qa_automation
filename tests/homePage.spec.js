// @ts-check
const { test, expect } = require('@playwright/test');
import { ERROR_MSG_WHEN_USRER_CLICKS_LOGIN_BTN_WITHOUT_ENTERING_ANY_DATA_TO_LOGIN_FIELDS } from '../helpers/testData';
import HomePage from '../page_objects/homePage';
import RegisterPage from '../page_objects/registerPage';

test.describe('homePage.spec', () => {

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
  });

  test('Verify the main page is opened', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await expect(homePage.pageHeader).toBeVisible();
  });

  test('Verify the Log in button is located on the main page', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.logInButton).toBeVisible();
  });
  
  test('Verify the Usernamae field is located on the main page', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.userNameField).toBeVisible();
  });

  test('Verify after clicking Register link the Register page is opened', async ({ page }) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    
    await homePage.clickRegisterLink();

    await expect(registerPage.pageHeader).toHaveText('Signing up is easy!');
  });

  test('Verify when the Username and Password fields are empty and after clicking the Log In button the error msg is appeared', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickLogInBtb();

    await expect(homePage.getErrorMsg).toHaveText(ERROR_MSG_WHEN_USRER_CLICKS_LOGIN_BTN_WITHOUT_ENTERING_ANY_DATA_TO_LOGIN_FIELDS);
  });
});