import { render, screen } from '@testing-library/react';
import React from 'react';

import { PureFooterNotice } from './FooterNotice';

describe('<PureFooterNotice />', () => {
  describe('with year', () => {
    test('createdYearよりyearの数字が大きいとき、`{createdYear}-{year}`と表示する', () => {
      render(
        <PureFooterNotice
          createdYear={2020}
          social={{ gitHub: 'userAccount' }}
          year={2021}
        />
      );

      expect(screen.getAllByText(/2020-2021/i)).toHaveLength(1);
    });

    test('yearの数字がcreatedYear以下のとき、`{year}`と表示する', () => {
      render(
        <PureFooterNotice
          createdYear={2020}
          social={{ gitHub: 'userAccount' }}
          year={2019}
        />
      );

      expect(screen.getAllByText(/(?<!-)2019(?!-)/i)).toHaveLength(1);

      render(
        <PureFooterNotice
          createdYear={2020}
          social={{ gitHub: 'userAccount' }}
          year={2020}
        />
      );

      expect(screen.getAllByText(/(?<!-)2020(?!-)/i)).toHaveLength(1);
    });
  });

  describe('with Link', () => {
    test.todo('リンク先は、存在する');
  });
});
