import { UrlSafePipe } from './url-safe.pipe';

describe('UrlSafePipe', () => {
  it('create an instance', () => {
    const pipe = new UrlSafePipe();
    expect(pipe).toBeTruthy();
  });
});
