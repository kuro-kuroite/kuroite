import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { PureFooterInfo } from './FooterInfo';

describe('<PureFooterInfo />', () => {
  afterEach(() => {
    cleanup();
  });

  test('previous.titleもnext.titleも1つずつ存在する', () => {
    render(
      <PureFooterInfo
        next={{ slug: '/next/', title: 'next title' }}
        previous={{ slug: '/previous/', title: 'previous title' }}
      />
    );

    expect(screen.getAllByText(/previous title/)).toHaveLength(1);
    expect(screen.getAllByText(/next title/)).toHaveLength(1);
  });

  describe('with previous', () => {
    test('previous.slugが存在しないとき、previous.titleも存在しない', () => {
      render(<PureFooterInfo next={{ slug: '/next/', title: 'next title' }} />);

      expect(screen.queryAllByText(/previous title/)).toHaveLength(0);
    });
  });

  describe('with next', () => {
    test('next.slugが存在しないとき、next.titleも存在しない', () => {
      render(
        <PureFooterInfo
          previous={{ slug: '/previous/', title: 'previous title' }}
        />
      );

      expect(screen.queryAllByText(/next title/)).toHaveLength(0);
    });
  });
});
