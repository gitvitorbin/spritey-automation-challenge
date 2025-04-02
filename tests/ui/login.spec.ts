import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';

test.describe('login tests for @ui', () => {
    test('test for a failed log in', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalid_login');
        await expect(loginPage.getLoginErrorMessage).toBeVisible();
    });
});