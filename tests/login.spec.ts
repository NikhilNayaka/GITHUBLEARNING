import { test, expect } from '@playwright/test';
import { Login01 } from '../Pages/Login01';

test('Verify successful login', async ({ page }) => {

    const loginPage = new Login01(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'tomsmith',
        'SuperSecretPassword!'
    );

    await expect(page.locator('h2'))
        .toHaveText('Secure Area');

});

test('Verify Login Page Title', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    await expect(page).toHaveTitle('The Internet');

});