import { cleanup, fireEvent, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { setTheme } from '../../../reducer/theme/themeSlice';
import { buildT } from '../../../utils/i18n';
import { ReduxFixtureStoreProvider } from '../../../utils/ReduxFixtureStoreProvider';
import { renderWithReduxStore } from '../../../utils/renderWithReduxStore';
import { DarkMode, PureDarkMode, useMode } from './DarkMode';

const t = buildT('components/layout/darkMode');

describe('<PureDarkMode />', () => {
  describe('with mode', () => {
    test('modeがdarkのとき、aria-labelはライトモードアイコンである', () => {
      renderWithReduxStore(<PureDarkMode mode={'dark'} onClick={jest.fn()} />);

      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-label',
        t('ライトモードアイコン')
      );
    });

    test('modeがlightのとき、aria-labelはダークモードアイコンである', () => {
      renderWithReduxStore(<PureDarkMode mode={'light'} onClick={jest.fn()} />);

      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-label',
        t('ダークモードアイコン')
      );
    });
  });

  describe('with onClick()', () => {
    let mockClick = jest.fn();

    beforeEach(() => {
      mockClick = jest.fn();

      renderWithReduxStore(<PureDarkMode mode={'dark'} onClick={mockClick} />);
    });

    afterEach(() => {
      cleanup();
    });

    test('ダークモードアイコンをクリックするとき、onClick()を1回呼び出す', () => {
      fireEvent.click(screen.getByRole('checkbox'));

      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });
});

describe('<DarkMode />', () => {
  // TODO: テストを書くとき，このsuiteを削除する(Your test suite must contain at least one test.)
  describe('with useMode()', () => {
    describe('with 初期値', () => {
      test('初期値は、store.themeと一致する', () => {
        const { result } = renderHook(() => useMode(), {
          wrapper: ReduxFixtureStoreProvider,
        });
        expect(result.current[0]).toEqual('light');
      });
    });

    describe('with null store.theme', () => {
      test.todo('modeの値は、システムのカラーテーマを返却する');
    });

    describe('with setMode()', () => {
      test('setMode(mode)でmodeの値を変更する', async () => {
        const { result, waitFor } = renderHook(() => useMode(), {
          wrapper: ReduxFixtureStoreProvider,
        });

        void act(() => {
          result.current[1]('dark');
        });

        await waitFor(() => {
          expect(result.current[0]).toEqual('dark');
        });

        void act(() => {
          result.current[1]('light');
        });

        await waitFor(() => {
          expect(result.current[0]).toEqual('light');
        });
      });
    });
  });

  describe('with onClick()', () => {
    afterEach(() => {
      cleanup();
    });

    test('チェックボックスをクリックすると、modeの値を反転する', () => {
      const { store } = renderWithReduxStore(<DarkMode />);

      // HACK: theme === nullを回避するため
      // NOTE: dark -> light -> darkの場合、テストが通らない
      store.dispatch(setTheme('light'));
      expect(store.getState().theme).toEqual('light');

      fireEvent.click(screen.getByRole('checkbox'));

      expect(store.getState().theme).toEqual('dark');

      fireEvent.click(screen.getByRole('checkbox'));

      expect(store.getState().theme).toEqual('light');
    });
  });
});
