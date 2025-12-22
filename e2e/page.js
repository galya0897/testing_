export default class Page {
  constructor(browser) {
    this.browser = browser;
  }

  async open() {
    this.page = await this.browser.newPage();
    await this.page.goto('http://localhost:9000', {
      waitUntil: 'networkidle0',
    });
  }

  async close() {
    await this.page.close();
  }

  async enterCardNumber(value) {
    await this.page.focus('.card-input');
    await this.page.keyboard.type(value);
  }

  async validate() {
    await this.page.click('.card-button');
  }

  async activeSystem() {
    return this.page.$$eval('.card', (cards) =>
      cards
        .filter((el) => el.classList.contains('card_active'))
        .map((el) => el.dataset.system)
    );
  }

  async invalidState() {
    return this.page.$$eval('.card', (cards) =>
      cards.every((el) => el.classList.contains('card_invalid'))
    );
  }
}
