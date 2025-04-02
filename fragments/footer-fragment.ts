import { expect, type Locator, type Page } from '@playwright/test';

export class Footer {
  readonly page: Page;
  readonly getTwitterLink: Locator;
  readonly getFacebookLink: Locator;
  readonly getLinkedInLink: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.getTwitterLink = page.locator('[data-test="social-twitter"]');
    this.getFacebookLink = page.locator('[data-test="social-facebook"]');
    this.getLinkedInLink = page.locator('[data-test="social-linkedin"]');
  }

  async clickOnTwitterLink() {
    await this.getTwitterLink.click();
  }

  async clickOnFacebookLink() {
    await this.getFacebookLink.click();
  }

  async clickOnlinkedinLink() {
    await this.getLinkedInLink.click();
  }
}