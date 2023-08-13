import { Given, setWorldConstructor, When } from '@wdio/cucumber-framework';
import ContextManager from '../pageobjects/contextManager.ts';
import Home from '../pageobjects/home.page.ts';
import { BOOKS_CATEGORY } from '../constants/index.ts';

setWorldConstructor(ContextManager);

const homeInstance = new Home();

Given(/^Go to the Amazon homepage$/, async () => {
    // Navigate to Amazon homepage
    await homeInstance.open();
});

When(/^Select 'Books' from the category list dropdown$/, async () => {
    const currentCategory = BOOKS_CATEGORY;

    // Select 'Books' from category dropdown
    await homeInstance.clickSearchDropdown();

    await homeInstance.selectValueFromDropdown(currentCategory);

    await homeInstance.validateSelectedCategoryHasUpdateLabel(currentCategory);
});

