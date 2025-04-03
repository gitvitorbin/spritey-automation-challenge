import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly getFinishButton: Locator;
  readonly getSubTotalPrice: Locator;
  readonly getTaxPrice: Locator;
  readonly getTotalPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getFinishButton = page.locator('[data-test="finish"]');
    this.getSubTotalPrice = page.locator('[data-test="subtotal-label"]');
    this.getTaxPrice = page.locator('[data-test="tax-label"]');
    this.getTotalPrice = page.locator('[data-test="total-label"]')
  }

  async goto() {
    await this.page.goto('/');
  }

  async validateTotalPrice(expectedSubtotal: number) {
    const displayedSubtotalText = await this.getSubTotalPrice.textContent();
    const displayedTaxText = await this.getTaxPrice.textContent();
    const displayedTotalText = await this.getTotalPrice.textContent();
    const displayedSubtotal = parseFloat(displayedSubtotalText!.replace('Item total: $', ''));
    const displayedTax = parseFloat(displayedTaxText!.replace('Tax: $', ''));
    const displayedTotal = parseFloat(displayedTotalText!.replace('Total: $', ''));
    const expectedTotal = expectedSubtotal + displayedTax;
    expect(displayedTotal).toBeCloseTo(expectedTotal, 2);
  }

  async clickOnFinishButton(){
    await this.getFinishButton.click();
  };
}