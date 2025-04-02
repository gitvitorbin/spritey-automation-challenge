import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  projects: [
    // 📌 Projeto para Testes UI (Web)
    {
      name: 'UI Tests (Chromium)',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
        headless: true,
      },
    },
    /*
    {
      name: 'UI Tests (Firefox)',
      use: {
        ...devices['Desktop Firefox'],
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
      },
    },
    {
      name: 'UI Tests (WebKit)',
      use: {
        ...devices['Desktop Safari'],
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
      },
    },

    // 📌 Projeto para Testes API
    {
      name: 'API Tests',
      use: {
        baseURL: 'https://reqres.in/',
      },
    },*/
  ],
});
