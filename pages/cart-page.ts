import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly getCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getCheckoutButton = page.locator('[data-test="checkout"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickOnCheckoutButton() {
    await this.getCheckoutButton.click();
  }
}