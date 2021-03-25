import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { PureTocIcon } from './TocIcon';

describe('<PureTocIcon />', () => {
  let mockTocIconClick = jest.fn();

  beforeEach(() => {
    mockTocIconClick = jest.fn();

    render(<PureTocIcon onTocIconClick={mockTocIconClick} />);
  });

  afterEach(() => {
    cleanup();
  });

  describe('with onTocIconClick()', () => {
    test('目次ボタンを押すと、onTocIconClick()を1回呼び出す', () => {
      fireEvent.click(screen.getByRole('button'));

      expect(mockTocIconClick).toHaveBeenCalledTimes(1);
    });
  });
});
