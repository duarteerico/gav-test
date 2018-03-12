import { EricoTestPage } from './app.po';

describe('erico-test App', () => {
  let page: EricoTestPage;

  beforeEach(() => {
    page = new EricoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
