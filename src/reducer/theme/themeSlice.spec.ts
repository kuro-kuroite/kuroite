import { setTheme, themeReducer, ThemeType } from './themeSlice';

const initAction = { type: 'init' };

describe('themeReducer()', () => {
  test('初期stateは，nullである', () => {
    expect(themeReducer(undefined, initAction)).toBe(null);
  });

  describe('with setTheme()', () => {
    test('themeを指定した値にする', () => {
      let theme: ThemeType = 'dark';
      expect(themeReducer('light', setTheme(theme))).toEqual(theme);

      theme = 'light';
      expect(themeReducer('dark', setTheme(theme))).toEqual(theme);
    });
  });
});
