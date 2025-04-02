import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { ProductsPage } from '../../pages/products-page';
import { Header } from '../../fragments/header-fragment';
import { CartPage } from '../../pages/cart-page';
import { CheckoutPage } from '../../pages/checkout-page';
import { CheckoutOverviewPage } from '../../pages/checkout-overview-page';
import { CheckoutCompletePage } from '../../pages/checkout-complete-page';

test.describe('sorting tests for @ui', () => {
    test('test that sorts the items by name Z-A and validate that the sorting is correct', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.goto();
        await loginPage.login('valid_login');
        await productsPage.sortBy('za');
        const productNames = await productsPage.getProductNames();
        const sortedNames = [...productNames].sort().reverse();
        expect(productNames).toEqual(sortedNames);
    });
});
