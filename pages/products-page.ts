import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly getAddToCartBackpackButton: Locator;
  readonly getAddToCartBikeLightButton: Locator;
  readonly getLoginButton: Locator;
  readonly getSortDropdown: Locator;
  readonly productNames: Locator;
  readonly backpackPrice: Locator;
  readonly bikeLightPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getAddToCartBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.getAddToCartBikeLightButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.getLoginButton = page.locator('[login-button"]');
    this.getSortDropdown = page.locator('[data-test="product-sort-container"]');
    this.productNames = page.locator('.inventory_item_name');
    this.backpackPrice = page
      .locator('[data-test="inventory-list"] div')
      .filter({ hasText: 'Sauce Labs Backpackcarry.' })
      .nth(1)
      .locator("text=$29.99");
    this.bikeLightPrice = page
      .locator('[data-test="inventory-list"] div')
      .filter({ hasText: 'Sauce Labs Bike LightA red' })
      .nth(1)
      .locator("text=$9.99");
  }

  async goto() {
    await this.page.goto('/');
  }

  async addTwoProducts() {
    // Get price texts
    const backpackPriceText = await this.backpackPrice.textContent();
    const bikeLightPriceText = await this.bikeLightPrice.textContent();
    const backpackPrice = parseFloat(backpackPriceText!.replace('$', ''));
    const bikeLightPrice = parseFloat(bikeLightPriceText!.replace('$', ''));

    await this.getAddToCartBackpackButton.click();
    await this.getAddToCartBikeLightButton.click();
    return backpackPrice + bikeLightPrice;
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.getSortDropdown.selectOption(option);
  }

  async getProductNames() {
    return await this.productNames.allTextContents();
  }
}