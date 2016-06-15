import { SchedulePage } from './app.po';

describe('schedule App', function() {
  let page: SchedulePage;

  beforeEach(() => {
    page = new SchedulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('schedule works!');
  });
});
