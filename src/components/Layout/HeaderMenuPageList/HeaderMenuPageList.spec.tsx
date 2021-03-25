import { cleanup, screen } from '@testing-library/react';
import React from 'react';

import { renderWithReduxStore } from '../../../utils/renderWithReduxStore';
import styles from '../HeaderMenuPageItem/HeaderMenuPageItem.module.css';
import { PureHeaderMenuPageList, PureProps } from './HeaderMenuPageList';

describe('<PureHeaderMenuPageList />', () => {
  describe('with pages', () => {
    test('pagesのサイズと.Linkのサイズは一致する', () => {
      let pages: PureProps['pages'] = [
        {
          title: 'blog',
          to: '/',
        },
        {
          title: 'about',
          to: '/about/',
        },
      ];
      renderWithReduxStore(<PureHeaderMenuPageList pages={pages} />);

      expect(
        screen
          .getAllByRole('link')
          .filter((element) => element.className === styles.Link)
      ).toHaveLength(2);

      cleanup();

      pages = [
        {
          title: 'index',
          to: '/',
        },
        {
          title: 'blog',
          to: '/',
        },
        {
          title: 'about',
          to: '/about/',
        },
      ];
      renderWithReduxStore(<PureHeaderMenuPageList pages={pages} />);

      expect(
        screen
          .getAllByRole('link')
          .filter((element) => element.className === styles.Link)
      ).toHaveLength(3);
    });
  });
});
