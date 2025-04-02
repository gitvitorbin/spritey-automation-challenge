import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly getFirstNameField: Locator;
  readonly getLastNameField: Locator;
  readonly getPostalCodeField: Locator;
  readonly getContinueButton: Locator;
  readonly getFinishButton: Locator;
  readonly getTotalLabel: Locator;
  readonly getBackToProductsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getFirstNameField = page.locator('[data-test="firstName"]');
    this.getLastNameField = page.locator('[data-test="lastName"]');
    this.getPostalCodeField = page.locator('[data-test="postalCode"]');
    this.getContinueButton = page.locator('[data-test="continue"]');
    this.getFinishButton = page.locator('[data-test="finish"]');
    this.getTotalLabel = page.locator('[data-test="total-label"]');
    this.getBackToProductsButton = page.locator('[data-test="back-to-products"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async fillCheckoutForm(){
    await this.getFirstNameField.fill('vitor');
    await this.getLastNameField.fill('binsfeld');
    await this.getPostalCodeField.fill('123456');
  };

  async clickOnContinueButton(){
    await this.getContinueButton.click();
  };
}