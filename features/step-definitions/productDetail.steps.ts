import { Then, When } from '@wdio/cucumber-framework';
import { ContextManagerType } from '../pageobjects/contextManager.ts';
import { ProductDetailPage } from '../pageobjects/productDetail.page.ts';

const productDetailInstance = new ProductDetailPage();

Then(/^Get the unit price of the item on the product detail page$/,
    async function (this: ContextManagerType) {
        // Get unit price from product detail page
        await productDetailInstance.storeSinglePrice(this);
    });

Then(/^Verify that the item name on the product detail page matches the stored name$/,
    async function (this: ContextManagerType) {
        await productDetailInstance.validateStoredProductTitleWithVisibleTitle(this);
    });

Then(/^Set the quantity to 2$/, async function (this: ContextManagerType): Promise<void> {
    const currentQuantity = 2;
    await productDetailInstance.clickQuantityDropDown();

    await productDetailInstance.setQuantitySelector(currentQuantity);

    await productDetailInstance.validateSelectedQuantity(currentQuantity);

    await productDetailInstance.storeQuantity(this, currentQuantity);

    await productDetailInstance.storeTotalPrice(this, currentQuantity);
});

When(/^Click on Add to Cart$/, async () => {
    // Click on Add to Cart
    await productDetailInstance.clickAddToCart();
});
