import Page from './page.ts';
import { $ } from '@wdio/globals';
import { expect } from 'chai';

class NavBar extends Page {
    private readonly _navSearchDropDownCardSelector = '#nav-search-dropdown-card';
    private readonly _searchDropdownBox = '#searchDropdownBox';
    private readonly _navSearchLabelId = '#nav-search-label-id';
    private readonly _navCartCountId = '#nav-cart-count';

    private readonly _twoTabSearchTextBox = '#twotabsearchtextbox';
    private readonly _navSearchSubmitText = '#nav-search-submit-text';

    async clickSearchDropdown(): Promise<void> {
        const categoryDropdown = await $(this._navSearchDropDownCardSelector);
        await categoryDropdown.waitForClickable();
        await categoryDropdown.click();
    }

    async selectValueFromDropdown(category: string): Promise<void> {
        const categorySelectElement = await $(this._searchDropdownBox);
        await categorySelectElement.selectByVisibleText(category);
    }

    async validateSelectedCategoryHasUpdateLabel(category: string): Promise<void> {
        const selectedCategoryElement = await $(this._navSearchLabelId);
        const selectedValue = await selectedCategoryElement.getText();
        expect(selectedValue).to.equal(category);
    }

    async validateCartCount(count: number): Promise<void> {
        const navCartCountElement = await $(this._navCartCountId);
        const navCartCount = await navCartCountElement.getText();
        expect(navCartCount).to.equal(count.toString());
    }

    async setSearchText(text: string): Promise<void> {
        const searchInput = await $(this._twoTabSearchTextBox);
        await searchInput.setValue(text);
    }

    async clickSearchButton(): Promise<void> {
        const searchButton = await $(this._navSearchSubmitText);
        await searchButton.click();
    }

    async validateSearchValueEntered(value: string): Promise<void> {
        const searchInput = await $(this._twoTabSearchTextBox);
        const searchedValue = await searchInput.getValue();
        expect(searchedValue).to.equal(value);
    }
}

export default NavBar;
