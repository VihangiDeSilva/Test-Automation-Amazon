import { ContextManagerType } from './contextManager.ts';
import { $, browser } from '@wdio/globals';
import { expect } from 'chai';
import { DOLLAR_SIGN } from '../constants/index.ts';
import NavBarPage from './navBar.page.ts';

class CartPage extends NavBarPage {
    private readonly _cartListClass = '.sc-list-item-content';
    private readonly _cartItemTitleClass =
        '.a-truncate-full.a-offscreen';
    private readonly _selectedQuantityClass = '.a-dropdown-prompt';
    private readonly _totalItemContainerId =
        '#sc-subtotal-amount-activecart';
    private readonly _totalItemElementClass =
        '.a-size-medium.a-color-base.sc-price.sc-white-space-nowrap';
    private readonly _deleteElementClass = '.a-color-link';
    private readonly _subTotalLabelId = '#sc-subtotal-label-activecart';

    async validateCartItemName(contextManager: ContextManagerType): Promise<void> {
        const cartList = await $(this._cartListClass);
        await cartList.waitForDisplayed();

        // Item Title verification
        const cartItemTitle = await cartList.$(this._cartItemTitleClass);

        // Enable the hidden elements
        await browser.execute((element) => {
            element.style.zIndex = '1!important';
            element.style.opacity = '1';
        }, cartItemTitle);

        await cartItemTitle.waitForDisplayed();

        const cartItemTitleValue = await cartItemTitle.getText();
        const secondSearchResultTitle = contextManager.sharedData.secondSearchResultName;
        expect(cartItemTitleValue.toLowerCase())
            .to.equal(secondSearchResultTitle.toString().toLowerCase());
    }

    async validateCartItemQuantity(contextManager: ContextManagerType): Promise<void> {
        const cartList = await $(this._cartListClass);
        await cartList.waitForDisplayed();

        // Item Quantity Verification
        const selectedQuantityElement = await cartList.$(this._selectedQuantityClass);
        const selectedQuantityValue = await selectedQuantityElement.getText();
        const storedQuantity = contextManager.sharedData.quantity;

        expect(selectedQuantityValue)
            .to.equal(storedQuantity.toString().toLowerCase());
    }

    async validateCartItemTotalPrice(contextManager: ContextManagerType): Promise<void> {
        const itemTotalContainerElement = await $(this._totalItemContainerId);
        const itemTotalElement = await itemTotalContainerElement.$(this._totalItemElementClass);

        const itemTotalValue = await itemTotalElement.getText();
        const extractItemTotalPrice = itemTotalValue.split(DOLLAR_SIGN)[1];
        const formattedItemTotal = parseFloat(extractItemTotalPrice);

        const storedTotalPrice = contextManager.sharedData.totalPrice;

        expect(formattedItemTotal).to.equal(storedTotalPrice);
    }

    async clickDeleteText(): Promise<void> {
        const cartList = await $(this._cartListClass);
        await cartList.waitForDisplayed();

        const deleteElement = await cartList.$(this._deleteElementClass);
        await deleteElement.waitForClickable();
        // Clear the cart
        await deleteElement.click();
    }

    async validateSubTotalTitle():Promise<void>{
        const subTotalTitleElement = await $(this._subTotalLabelId);
        await subTotalTitleElement.waitForDisplayed();
        const emptyMessage = 'Subtotal (0 items):';
        const subTatalTitleValue = await subTotalTitleElement.getText();
        expect(subTatalTitleValue).to.equal(emptyMessage);
    }

    async validateCartElement():Promise<void>{
        const cartList = await $(this._cartListClass);
        const isCartListDisplayed = await cartList.isDisplayed();
        expect(isCartListDisplayed).to.be.false;
    }

}

export default CartPage;
