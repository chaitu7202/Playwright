import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('Login Tests', () => {
    test('Successful login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('admin', 'password123');

        // Assertion: Check if redirected to dashboard
        await expect(page).toHaveURL('https://example.com/dashboard');
    });
});
