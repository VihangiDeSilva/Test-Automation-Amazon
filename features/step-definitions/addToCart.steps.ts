import { When } from '@wdio/cucumber-framework';
import AddToCartPage from '../pageobjects/addToCart.page.ts';

const addToCartInstance = new AddToCartPage();

When(/^Click on Go to Cart$/, async () => {
    // Click on Go to Cart
    await addToCartInstance.clickGoToCartButton();
});
