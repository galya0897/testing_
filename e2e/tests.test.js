import puppeteer from 'puppeteer';
import Page from './page';

jest.setTimeout(30000);

describe('Credit Card Validator E2E', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    page = new Page(browser);
    await page.open();
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });

  test('detect MIR card', async () => {
    await page.enterCardNumber('2200152933622402');
    await page.validate();

    const active = await page.activeSystem();
    expect(active).toEqual(['mir']);
  });

  test('detect Visa card', async () => {
    await page.page.reload({ waitUntil: 'networkidle0' });

    await page.enterCardNumber('4111111111111111');
    await page.validate();

    const active = await page.activeSystem();
    expect(active).toEqual(['visa']);
  });

  test('invalid card highlights all as invalid', async () => {
    await page.page.reload({ waitUntil: 'networkidle0' });

    await page.enterCardNumber('1234567890123456');
    await page.validate();

    const invalid = await page.invalidState();
    expect(invalid).toBe(true);
  });
});
