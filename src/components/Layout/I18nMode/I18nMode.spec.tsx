import { cleanup, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { setLang } from '../../../reducer/lang/langSlice';
import { buildT } from '../../../utils/i18n';
import { renderWithReduxStore } from '../../../utils/renderWithReduxStore';
import { I18nMode, PureI18nMode } from './I18nMode';

const t = buildT('components/layout/i18nMode');

describe('<PureI18nMode />', () => {
  describe('with mode', () => {
    test('modeがjaのとき、aria-labelは英語アイコンである', () => {
      renderWithReduxStore(<PureI18nMode mode={'ja'} onClick={jest.fn()} />);

      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-label',
        t('英語アイコン')
      );
    });

    test('modeがjaのとき、テキストは🇺🇸である', () => {
      renderWithReduxStore(<PureI18nMode mode={'ja'} onClick={jest.fn()} />);

      expect(screen.getAllByText('🇺🇸')).toHaveLength(1);
    });

    test('modeがenのとき、aria-labelは日本語アイコンである', () => {
      renderWithReduxStore(<PureI18nMode mode={'en'} onClick={jest.fn()} />);

      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-label',
        t('日本語アイコン')
      );
    });

    test('modeがenのとき、テキストは🇯🇵である', () => {
      renderWithReduxStore(<PureI18nMode mode={'en'} onClick={jest.fn()} />);

      expect(screen.getAllByText('🇯🇵')).toHaveLength(1);
    });
  });

  describe('with onClick()', () => {
    let mockClick = jest.fn();

    beforeEach(() => {
      mockClick = jest.fn();

      renderWithReduxStore(<PureI18nMode mode={'ja'} onClick={mockClick} />);
    });

    afterEach(() => {
      cleanup();
    });

    test('I18nアイコンをクリックするとき、onClick()を1回呼び出す', () => {
      fireEvent.click(screen.getByRole('checkbox'));

      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });
});

describe('<I18nMode />', () => {
  describe('with onClick()', () => {
    afterEach(() => {
      cleanup();
    });

    test('チェックボックスをクリックすると、modeの値を反転する', () => {
      const { store } = renderWithReduxStore(<I18nMode />);

      // HACK: 初期値を指定
      store.dispatch(setLang('ja'));
      expect(store.getState().lang).toEqual('ja');

      fireEvent.click(screen.getByRole('checkbox'));

      expect(store.getState().lang).toEqual('en');

      fireEvent.click(screen.getByRole('checkbox'));

      expect(store.getState().lang).toEqual('ja');
    });
  });
});
