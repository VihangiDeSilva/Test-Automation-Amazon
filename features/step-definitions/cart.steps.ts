import { Then, When } from '@wdio/cucumber-framework';
import { ContextManagerType } from '../pageobjects/contextManager.ts';
import CartPage from '../pageobjects/cart.page.ts';

const cartInstance = new CartPage();

Then(/^Verify that cart details are correct - item name$/,
    async function (this: ContextManagerType) {
        await cartInstance.validateCartItemName(this);
    });

Then(/^Verify that cart details are correct - quantity$/,
    async function (this: ContextManagerType): Promise<void> {
        await cartInstance.validateCartItemQuantity(this);
    });

Then(/^Verify that cart details are correct - total price$/,
    async function (this: ContextManagerType) {
        // Item Total Price Verification
        await cartInstance.validateCartItemTotalPrice(this);
    });

When(/^Clear the cart$/, async () => {
    // Verify cart details
    await cartInstance.clickDeleteText();
});

Then(/^Verify that the total amount is equal to \$0\.00$/, async () => {

    await cartInstance.validateSubTotalTitle();

    // Verify cart details
    await cartInstance.validateCartElement();

    // Verify total amount is $0.00
    await cartInstance.validateCartCount(0);

});
