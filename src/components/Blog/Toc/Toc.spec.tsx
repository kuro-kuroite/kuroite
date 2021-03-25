import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { PureToc, Toc, useTocWrap } from './Toc';
import styles from './Toc.module.css';

describe('<PureToc />', () => {
  describe('with isWrap', () => {
    test('isWrapがtrueのとき、.WrappedBlindと.WrappedTocになる', () => {
      const { container } = render(
        <PureToc isWrap={true} onTocIconClick={jest.fn()} tableOfContents="" />
      );

      expect(
        container.getElementsByClassName(styles.WrappedBlind)
      ).toHaveLength(1);
      expect(container.getElementsByClassName(styles.Blind)).toHaveLength(0);
      expect(container.getElementsByClassName(styles.WrappedToc)).toHaveLength(
        1
      );
      expect(container.getElementsByClassName(styles.Toc)).toHaveLength(0);
    });

    test('isWrapがfalseのとき、.Blindと.Tocになる', () => {
      const { container } = render(
        <PureToc isWrap={false} onTocIconClick={jest.fn()} tableOfContents="" />
      );

      expect(
        container.getElementsByClassName(styles.WrappedBlind)
      ).toHaveLength(0);
      expect(container.getElementsByClassName(styles.Blind)).toHaveLength(1);
      expect(container.getElementsByClassName(styles.WrappedToc)).toHaveLength(
        0
      );
      expect(container.getElementsByClassName(styles.Toc)).toHaveLength(1);
    });
  });

  describe('with onTocIconClick()', () => {
    let mockTocIconClick = jest.fn();

    beforeEach(() => {
      mockTocIconClick = jest.fn();
    });

    afterEach(() => {
      cleanup();
    });

    test('WrappedBlindをクリックすると、onTocIconClick()を1回呼び出す', () => {
      render(
        <PureToc
          isWrap={true}
          onTocIconClick={mockTocIconClick}
          tableOfContents=""
        />
      );

      fireEvent.click(screen.getAllByRole('button')[0]);

      expect(mockTocIconClick).toHaveBeenCalledTimes(1);
    });

    test('<TocIcon />をクリックすると、onTocIconClick()を1回呼び出す', () => {
      render(
        <PureToc
          isWrap={true}
          onTocIconClick={mockTocIconClick}
          tableOfContents=""
        />
      );

      fireEvent.click(screen.getAllByRole('button')[1]);

      expect(mockTocIconClick).toHaveBeenCalledTimes(1);
    });
  });
});

describe('<Toc />', () => {
  describe('with useTocWrap()', () => {
    describe('with isWrap', () => {
      test('初期値は, falseである', () => {
        const { result } = renderHook(() => {
          return useTocWrap();
        });

        expect(result.current[0]).toBe(false);
      });
    });

    // TODO: hashchange event を発生するやり方が分からないため
    test.todo('urlのハッシュが変化すると、isWrapをfalseにする');
  });

  describe('with handleTocIconClick()', () => {
    test('TocIconをクリックすると、isWrapの真偽値を反転する', () => {
      render(<Toc tableOfContents="" />);

      expect(screen.getAllByRole('button')[0].className).toEqual(styles.Blind);

      fireEvent.click(screen.getAllByRole('button')[1]);

      expect(screen.getAllByRole('button')[0].className).toEqual(
        styles.WrappedBlind
      );
    });
  });
});
