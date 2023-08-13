import { Then, When } from '@wdio/cucumber-framework';
import SearchResultPage from '../pageobjects/search.result.page.ts';
import { ContextManagerType } from '../pageobjects/contextManager.ts';
import { AUTOMATION_SEARCH_TEXT } from '../constants/index.ts';

const searchResultInstance = new SearchResultPage();

When(/^Search for 'Automation'$/, async () => {
    const currentSearchText = AUTOMATION_SEARCH_TEXT;

    // Replace with the actual selector for the search input field
    await searchResultInstance.setSearchText(currentSearchText);

    // Replace with the actual selector for the search button
    await searchResultInstance.clickSearchButton();

    await searchResultInstance.validateSearchValueEntered(currentSearchText);

});

When(/^Select '4 Stars & UP' in customer reviews$/, async () => {
    await searchResultInstance.selectFourStarFilter();
});

When(/^Select 'English' as the language$/, async () => {
    await searchResultInstance.selectEnglishLanguageFilter();
});

Then(/^Store the name of the second item from the product list page$/,
    async function (this: ContextManagerType): Promise<void> {
        await searchResultInstance.storeSecondResultTitle(this);
    });

When(/^Click on the second item from the product list page$/, async () => {
    // Click on the second item
    await searchResultInstance.clickPaperBackText();
});
