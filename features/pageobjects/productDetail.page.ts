import { $ } from '@wdio/globals';
import { ContextManagerType } from './contextManager.ts';
import { expect } from 'chai';
import { DOLLAR_SIGN } from '../constants/index.ts';

export class ProductDetailPage {
    private readonly _paperBackDetailElementClass =
        '.swatchElement.selected';
    private readonly _priceElementClass =
        '.a-size-base.a-color-price.a-color-price';
    private readonly _productTitleId = '#productTitle';
    private readonly _quantityDropDownSelector = '#selectQuantity > span > div > div > span';
    private readonly _quantitySelectElementId = '#quantity';
    private readonly _selectedQuantityElementClass = '.a-dropdown-prompt';
    private readonly _addToCartBtnElementId = '#add-to-cart-button';

    async storeSinglePrice(contextManager: ContextManagerType): Promise<void> {
        const paperBackDetailElement = await $(this._paperBackDetailElementClass);
        await paperBackDetailElement.waitForDisplayed();

        const priceElement = await paperBackDetailElement.$(this._priceElementClass);
        await priceElement.waitForDisplayed();

        const priceValue = await priceElement.getText();
        const extractPrice = priceValue.split(DOLLAR_SIGN)[1];
        contextManager.sharedData.price = parseFloat(extractPrice);
    }

    async validateStoredProductTitleWithVisibleTitle(contextManager: ContextManagerType) {
        const productTitleElement = await $(this._productTitleId);
        await productTitleElement.waitForDisplayed();
        const productTitleValue = await productTitleElement.getText();
        const secondSearchResultName = contextManager.sharedData.secondSearchResultName;
        console.log('Book Name: ',secondSearchResultName);
        expect(secondSearchResultName.toString().toLowerCase())
            .to.equal(productTitleValue.toLowerCase());
    }

    async clickQuantityDropDown(): Promise<void> {
        const quantityDropdown = await $(this._quantityDropDownSelector);
        await quantityDropdown.waitForClickable();
        await quantityDropdown.click();
    }

    async setQuantitySelector(quantity: number): Promise<void> {
        const quantitySelectElement = await $(this._quantitySelectElementId);
        await quantitySelectElement.waitForDisplayed();
        await quantitySelectElement.selectByVisibleText(quantity.toString());
    }

    async validateSelectedQuantity(quantity: number): Promise<void> {
        const selectedQuantityElement = await $(this._selectedQuantityElementClass);
        const selectedValue = await selectedQuantityElement.getText();
        expect(selectedValue).to.equal(quantity.toString());
    }

    async storeQuantity(contextManager: ContextManagerType, quantity: number): Promise<void> {
        contextManager.sharedData.quantity = quantity;
    }

    async storeTotalPrice(contextManager: ContextManagerType, quantity: number): Promise<void> {
        const singleItemPrice = contextManager.sharedData.price as number;
        contextManager.sharedData.totalPrice = quantity * singleItemPrice;
    }

    async clickAddToCart(): Promise<void> {
        const addToCartBtn = await $(this._addToCartBtnElementId);
        await addToCartBtn.waitForClickable();
        await addToCartBtn.click();
    }
}
