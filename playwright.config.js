// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
 testIgnore: ['test/**'],
 testDir: 'tests',
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

   
  ],
  webServer: {
    command: 'npm run start-prod',
    url: 'http://localhost:5000',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI, // optional, avoids restarting if already running

  },
  use: {
    baseURL: 'http://localhost:5000/',
  },

});

