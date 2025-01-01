// @ts-check
const { test, expect } = require('@playwright/test');
import HomePage from '../page_objects/homePage';

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
  
  test('Verify the Usernamae field is located on the main page', async ({ page}) => {
    const homePage = new HomePage(page);

    await expect(homePage.userNameField).toBeVisible();
  });
});