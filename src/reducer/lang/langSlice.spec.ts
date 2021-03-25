import { langReducer, LangType, setLang } from './langSlice';

const initAction = { type: 'init' };

describe('langReducer()', () => {
  test('初期stateは，jaである', () => {
    expect(langReducer(undefined, initAction)).toEqual('ja');
  });

  describe('with setLang()', () => {
    test('langを指定した値にする', () => {
      let lang: LangType = 'en';
      expect(langReducer('ja', setLang(lang))).toEqual(lang);

      lang = 'ja';
      expect(langReducer('en', setLang(lang))).toEqual(lang);
    });
  });
});
