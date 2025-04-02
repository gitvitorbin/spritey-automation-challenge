import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly getAddToCartBackpackButton: Locator;
  readonly getAddToCartBikeLightButton: Locator;
  readonly getLoginButton: Locator;
  readonly getSortDropdown: Locator;
  readonly productNames: Locator;


  constructor(page: Page) {
    this.page = page;
    this.getAddToCartBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.getAddToCartBikeLightButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.getLoginButton = page.locator('[login-button"]');
    this.getSortDropdown = page.locator('[data-test="product-sort-container"]');
    this.productNames = page.locator('.inventory_item_name'); // Locator for product names
  }

  async goto() {
    await this.page.goto('/');
  }

  async addTwoProducts() {
    await this.getAddToCartBackpackButton.click();
    await this.getAddToCartBikeLightButton.click();
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.getSortDropdown.selectOption(option);
  }

  async getProductNames() {
    return await this.productNames.allTextContents();
  }
}