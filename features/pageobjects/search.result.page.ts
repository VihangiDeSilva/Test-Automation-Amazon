import NavBarPage from './navBar.page.ts';
import FilterPage from './filter.page.ts';
import { ContextManagerType } from './contextManager.ts';
import { $ } from '@wdio/globals';

class SearchResultPage {
    private readonly _secondSearchResultElement = '[data-cel-widget="search_result_2"]';
    private readonly _secondSearchResultTitleElement = 'h2';
    private readonly _secondSearchResultPaperBackElement = 'a*=Paperback';

    private readonly _navBarInstance = new NavBarPage();
    private readonly _filterBarInstance = new FilterPage();

    async storeSecondResultTitle(contextManager: ContextManagerType): Promise<void> {
        const secondSearchResultElement = await $(this._secondSearchResultElement);
        const titleElement = await secondSearchResultElement
            .$(this._secondSearchResultTitleElement);
        contextManager.sharedData.secondSearchResultName = await titleElement.getText();
    }

    async selectEnglishLanguageFilter(): Promise<void> {
        await this._filterBarInstance.selectEnglishLanguageFilter();
    }

    async selectFourStarFilter(): Promise<void> {
        await this._filterBarInstance.selectFourStarFilter();
    }

    async setSearchText(value: string): Promise<void> {
        await this._navBarInstance.setSearchText(value);
    }

    async clickSearchButton(): Promise<void> {
        await this._navBarInstance.clickSearchButton();
    }

    async validateSearchValueEntered(value: string): Promise<void> {
        await this._navBarInstance.validateSearchValueEntered(value);
    }

    async clickPaperBackText(): Promise<void> {
        const secondSearchResultElement = await $(this._secondSearchResultElement);
        await secondSearchResultElement.waitForDisplayed();

        // Get and store the name of the second item
        const paperBackTitleElement = await secondSearchResultElement
            .$(this._secondSearchResultPaperBackElement);
        await paperBackTitleElement.waitForDisplayed();
        await paperBackTitleElement.click();
    }

}

export default SearchResultPage;
