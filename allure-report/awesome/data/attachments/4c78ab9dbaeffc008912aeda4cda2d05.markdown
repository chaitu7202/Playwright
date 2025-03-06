# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login Tests >> Successful login
- Location: E:\playwright-automation\tests\login.test.js:5:9

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\mudun\AppData\Local\ms-playwright\webkit-2140\Playwright.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import LoginPage from '../pages/loginPage';
   3 |
   4 | test.describe('Login Tests', () => {
>  5 |     test('Successful login', async ({ page }) => {
     |         ^ Error: browserType.launch: Executable doesn't exist at C:\Users\mudun\AppData\Local\ms-playwright\webkit-2140\Playwright.exe
   6 |         const loginPage = new LoginPage(page);
   7 |         await loginPage.goto();
   8 |         await loginPage.login('admin', 'password123');
   9 |
  10 |         // Assertion: Check if redirected to dashboard
  11 |         await expect(page).toHaveURL('https://example.com/dashboard');
  12 |     });
  13 | });
  14 |
```