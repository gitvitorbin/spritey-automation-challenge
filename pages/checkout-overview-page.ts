import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly getFinishButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.getFinishButton = page.locator('[data-test="finish"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickOnFinishButton(){
    await this.getFinishButton.click();
  };
}