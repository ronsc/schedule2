export class SchedulePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('schedule-app h1')).getText();
  }
}
