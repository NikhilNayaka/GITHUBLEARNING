import { Page } from '@playwright/test';

export class Login01 {

    constructor(private page: Page) {}

    async navigateToLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username: string, password: string) {
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('button[type="submit"]').click();
    }

}