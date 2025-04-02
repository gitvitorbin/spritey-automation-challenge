import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly getUsernameField: Locator;
  readonly getPasswordField: Locator;
  readonly getLoginButton: Locator;
  readonly getLoginErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getUsernameField = page.locator('[data-test="username"]');
    this.getPasswordField = page.locator('[data-test="password"]');
    this.getLoginButton = page.locator('[data-test="login-button"]');
    this.getLoginErrorMessage = page.locator('[data-test="error"]');
  }

  static USERS = {
    valid_login: { username: 'standard_user', password: 'secret_sauce' },
    locked_out: { username: 'locked_out_user', password: 'secret_sauce' },
    problem_user: { username: 'problem_user', password: 'secret_sauce' },
    glitch_user: { username: 'performance_glitch_user', password: 'secret_sauce' },
    invalid_login: { username: 'invalid_user', password: 'wrong_password' }
  };

  async goto() {
    await this.page.goto('/');
  }

  async login(userType: keyof typeof LoginPage.USERS) {
    const user = LoginPage.USERS[userType];
    await this.getUsernameField.fill(user.username);
    await this.getPasswordField.fill(user.password);
    await this.getLoginButton.click();
  }
}