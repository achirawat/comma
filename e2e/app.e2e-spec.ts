import { CommaPage } from './app.po';

describe('comma App', () => {
  let page: CommaPage;

  beforeEach(() => {
    page = new CommaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
