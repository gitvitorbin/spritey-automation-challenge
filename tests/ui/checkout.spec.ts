import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { ProductsPage } from '../../pages/products-page';
import { Header } from '../../fragments/header-fragment';
import { CartPage } from '../../pages/cart-page';
import { CheckoutPage } from '../../pages/checkout-page';
import { CheckoutOverviewPage } from '../../pages/checkout-overview-page';
import { CheckoutCompletePage } from '../../pages/checkout-complete-page';

test.describe('checkout tests for @ui', () => {
    test('test for a full checkout that contains two items and validate the final price', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const header = new Header(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        const checkoutCompletePage = new CheckoutCompletePage(page);

        await loginPage.goto();
        await loginPage.login('valid_login');
        await productsPage.addTwoProducts();
        await header.clickOnShoppingCartButton();
        await cartPage.clickOnCheckoutButton();
        await checkoutPage.fillCheckoutForm();
        await checkoutPage.clickOnContinueButton();
        //await checkoutOverviewPage.validateTotalPrice();
        await checkoutOverviewPage.clickOnFinishButton();
        await checkoutCompletePage.validateFinishMessage();
    });
});