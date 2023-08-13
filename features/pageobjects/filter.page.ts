import { $ } from '@wdio/globals';
import Page from './page.ts';

class FilterPage extends Page {
    private readonly _fourStarFilterSelector =
        '#reviewsRefinements > ul > span:nth-child(1)';
    private readonly _englishLanguageFilterSelector =
        '#p_n_feature_nine_browse-bin\\/3291437011 > span > a';

    async selectFourStarFilter(): Promise<void> {
        const starsFilter = await $(this._fourStarFilterSelector);
        // Wait until the starsFilter element is clickable
        await starsFilter.waitForClickable();
        await starsFilter.click();
    }

    async selectEnglishLanguageFilter(): Promise<void> {
        const languageFilter = await $(this._englishLanguageFilterSelector);
        await languageFilter.waitForClickable();
        await languageFilter.click();
    }
}

export default FilterPage;
