# E-Commerce Playwright Automation Framework

Production-style end-to-end automation framework built with Playwright and JavaScript for the QA Automation Labs e-commerce application.

## Tech Stack

- Playwright Test
- JavaScript and Node.js
- Page Object Model
- Custom Playwright fixtures
- dotenv environment configuration
- Playwright HTML reporting
- Allure reporting
- Chrome channel

## Application

- URL: https://shop.qaautomationlabs.com
- Entry page: `/index.php`
- Application: QA Automation Labs E-Commerce Shop
- Verified browser: Google Chrome through Playwright's `chrome` channel

## Prerequisites

- Node.js installed and available on `PATH`
- Google Chrome installed locally
- Network access to the application under test

This project is configured to use the installed Chrome browser. Playwright's bundled browser downloads are not required. In the current environment, downloads for Firefox, WebKit, and bundled Chromium time out at the Playwright CDN.

## Installation

Install dependencies:

```powershell
npm install
```

Copy the example environment file:

```powershell
Copy-Item .env.example .env
```

Update `.env` with valid credentials:

```text
BASE_URL=https://shop.qaautomationlabs.com
DEMO_EMAIL=your-demo-email
DEMO_PASSWORD=your-demo-password
BROWSER=chromium
```

The documented demo credentials are available in `APPLICATION_ANALYSIS.md`. Do not commit real credentials to source control.

## Project Structure

```text
ecommerce-playwright-framework/
├── config/
├── src/
│   ├── components/
│   ├── data/
│   ├── fixtures/
│   ├── pages/
│   └── utils/
├── tests/
│   ├── negative/
│   └── ui/
├── reports/
├── test-results/
├── .env.example
├── .gitignore
├── APPLICATION_ANALYSIS.md
├── package.json
├── playwright.config.js
└── README.md
```

## Running Tests

Run the complete test suite:

```powershell
$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD='1'; npx playwright test --project=chromium
```

Run the smoke login test:

```powershell
npm run test:smoke
```

Run one test file:

```powershell
$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD='1'; npx playwright test tests/ui/login.spec.js --project=chromium
```

Run the purchase flow:

```powershell
$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD='1'; npx playwright test tests/ui/purchase.spec.js --project=chromium
```

Run tests with line output:

```powershell
$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD='1'; npx playwright test --project=chromium --reporter=line
```

## Codegen and Browser Tools

Open the application in Playwright Codegen using installed Chrome:

```powershell
npx playwright codegen --browser=chromium --channel=chrome https://shop.qaautomationlabs.com/index.php
```

Save generated JavaScript to a file:

```powershell
npx playwright codegen -o generated.spec.js --target=javascript --browser=chromium --channel=chrome https://shop.qaautomationlabs.com/index.php
```

Open a URL in the configured browser:

```powershell
npx playwright open --browser=chromium --channel=chrome https://shop.qaautomationlabs.com/index.php
```

## Reports

Playwright generates an HTML report in `reports/playwright-report`:

```powershell
npx playwright show-report reports/playwright-report
```

Generate an Allure report from the test results:

```powershell
npm run report:allure
```

Open the generated Allure report:

```powershell
npm run open:allure
```

Reports and test artifacts are written to:

- `reports/playwright-report`
- `reports/allure-results`
- `reports/allure-report`
- `test-results`

## Test Coverage

The current suites cover:

- Valid login
- Invalid login scenarios
- Logout
- Product navigation
- Add to cart
- Cart quantity and checkout navigation
- Required checkout-field validation
- Billing details and order confirmation
- Successful purchase flow

## Configuration

The Playwright configuration is in `playwright.config.js`.

The named project is `chromium`, and it uses:

- `browserName: 'chromium'`
- `channel: 'chrome'`
- Headless execution
- Screenshots, video, and traces on failure
- List, HTML, and Allure reporters

Use `--project=chromium` when running a specific test or suite.

## Troubleshooting

### Project `chromium` not found

Make sure `playwright.config.js` contains a project named `chromium`, then run:

```powershell
npx playwright test --list
```

### Browser download timeout

Do not run the bundled browser installation when local Chrome is available. Use the configured Chrome project and set the download skip variable:

```powershell
$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD='1'; npx playwright test --project=chromium
```

### Opening the wrong report command

Use `npx playwright show-report`, not `npx show-reports`.

## Application Reference

See [APPLICATION_ANALYSIS.md](APPLICATION_ANALYSIS.md) for observed application behavior, selectors, product details, checkout fields, and validation messages.
