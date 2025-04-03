# Spritey Automation Challenge

## Overview
This project is an automated testing solution for the Spritey Automation Challenge. It covers **UI and API tests** using **Playwright** with the **Page Object Model (POM)** and **fragment pattern** for better maintainability and reusability.

### Tech Stack
- **Test Framework**: Playwright
- **Programming Language**: TypeScript
- **CI/CD**: GitHub Actions

## Installation & Setup
### Prerequisites
- Node.js (LTS version)
- Playwright dependencies

### Steps
1. Clone the repository:
   ```sh
   git clone git@github.com:gitvitorbin/spritey-automation-challenge.git
   cd spritey-automation-challenge
   ```
2. Install dependencies:
   ```sh
   npm ci
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install --with-deps
   ```

## Test Execution
### Run UI Tests
```sh
npx playwright test --grep "@ui"
```
### Run API Tests
```sh
npx playwright test --grep "@api"
```
### Run All Tests
```sh
npx playwright test
```

## Project Structure
```
SPRITEY-AUTOMATION-CHALLENGE/
├── .github/workflows/       # GitHub Actions CI/CD pipeline
│   ├── playwright.yml       # Playwright test automation pipeline
├── fragments/               # Common UI components (Header, Footer)
│   ├── header-fragment.ts
│   ├── footer-fragment.ts
├── pages/                   # Page Object Model (POM) implementation
│   ├── login-page.ts
│   ├── checkout-page.ts
│   ├── checkout-overview-page.ts
│   ├── cart-page.ts
│   ├── products-page.ts
├── tests/                   # Test files
│   ├── api/                 # API tests
│   │   ├── api-tests.spec.ts
│   ├── ui/                  # UI tests
│   │   ├── login.spec.ts
│   │   ├── checkout.spec.ts
│   │   ├── sorting.spec.ts
├── playwright.config.ts     # Playwright configuration file
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lockfile
├── .gitignore               # Git ignored files
```

## CI/CD Integration
GitHub Actions is configured to run tests on **push** and **pull requests**:
- **`ui-tests`** job runs UI tests
- **`api-tests`** job runs API tests
- Test reports are uploaded as artifacts

## Assumptions
- The challenge allows usage of Playwright for automation
- `@ui` and `@api` tags are used to differentiate tests
- Sorting validation checks only alphabetical order (Z-A)

## AI Usage
AI tools were used for:
- Structuring this README
- Optimizing Playwright test syntax

## Author
Vitor Binsfeld

