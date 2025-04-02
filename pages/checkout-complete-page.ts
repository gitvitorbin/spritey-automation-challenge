import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;
  readonly getBackToProductsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getBackToProductsButton = page.locator('[data-test="back-to-products"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async validateFinishMessage(){
    const finishMessage = await this.page.locator('.complete-header').innerText();
    const expectedMessage = 'Thank you for your order!';
    expect(finishMessage).toBe(expectedMessage);
  };
}