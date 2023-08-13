import { browser } from '@wdio/globals';

export default class Page {

    async open(path?: string): Promise<void> {
        await browser.url(`/${path}`);
    }
}
