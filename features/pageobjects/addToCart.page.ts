import { $ } from '@wdio/globals';

class AddToCartPage {
    private readonly _gotToCartBtnContainerId = '#sw-gtc';
    private readonly _gotToCartBtnClass='.a-button-inner';

    async clickGoToCartButton():Promise<void>{
        const goToCartBtnContainer = await $(this._gotToCartBtnContainerId);
        const goToCartBtn = await goToCartBtnContainer.$(this._gotToCartBtnClass);
        await goToCartBtn.waitForClickable();
        await goToCartBtn.click();
    }
}

export default AddToCartPage;
