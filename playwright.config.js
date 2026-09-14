require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,

  timeout: 30 * 1000,

  expect: {
    timeout: 5 * 1000,
  },

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'reports/playwright-report',
      open: 'never',
    }],
    ['allure-playwright', {
      resultsDir: 'reports/allure-results',
    }],
  ],

  projects: [
    {
      name: 'chromium',
      use: {
        baseURL: process.env.BASE_URL,
        browserName: 'chromium',
        channel: 'chrome',
        headless: true,
        actionTimeout: 10 * 1000,
        navigationTimeout: 30 * 1000,
        screenshot: 'only-on-failure',
        video: 'off',
        trace: 'retain-on-failure',
      },
    },
  ],

  outputDir: 'test-results',
});
