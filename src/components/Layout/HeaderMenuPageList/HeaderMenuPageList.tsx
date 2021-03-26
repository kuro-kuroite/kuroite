import React, { VFC } from 'react';

import {
  HeaderMenuPageItem,
  Props as HeaderMenuPageItemProps,
} from '../HeaderMenuPageItem/HeaderMenuPageItem';
import styles from './HeaderMenuPageList.module.css';

export const PureHeaderMenuPageList: VFC<PureProps> = ({ pages }) => (
  <ul className={styles.List}>
    {pages.map(({ title, to }) => {
      return (
        <li key={title}>
          <HeaderMenuPageItem title={title} to={to} />
        </li>
      );
    })}
  </ul>
);

export const HeaderMenuPageList: VFC<Props> = ({ pages }) => {
  return <PureHeaderMenuPageList pages={pages} />;
};

export type PureProps = Props;

export type Props = {
  pages: {
    [P in keyof HeaderMenuPageItemProps]: HeaderMenuPageItemProps[P];
  }[];
};
