import { Schedule2Page } from './app.po';

describe('schedule2 App', () => {
  let page: Schedule2Page;

  beforeEach(() => {
    page = new Schedule2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
