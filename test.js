const { Builder, By, until } = require('selenium-webdriver');
const AxeBuilder = require('@axe-core/webdriverjs');

let driver;
beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

describe('Accessibility Tests', () => {
    it('Ensure main-nav (CSS selector) has been loaded', async () => {
        await driver.get('https://dequeuniversity.com/demo/mars');
        await driver.findElement(By.css('main-nav'))
    });
    
    it('Perform accessibility scan of the page', async () => {
        await driver.get('https://dequeuniversity.com/demo/mars');
        const results = await new AxeBuilder(driver).analyze();
        console.log(results);
        expect(results.violations.length).toBe(0);
    });
});

afterAll(async () => {
    await driver.quit();
});
