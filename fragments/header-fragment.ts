import { expect, type Locator, type Page } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly getShoppingCartLink: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.getShoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async clickOnShoppingCartButton() {
    await this.getShoppingCartLink.click();
  }
}