import React, { VFC } from 'react';

import {
  HeaderMenuIconList,
  Props as HeaderMenuIconListProps,
} from '../HeaderMenuIconList/HeaderMenuIconList';
import {
  HeaderMenuPageList,
  Props as HeaderMenuPageListProps,
} from '../HeaderMenuPageList/HeaderMenuPageList';
import styles from './HeaderMenu.module.css';

export const PureHeaderMenu: VFC<PureProps> = ({ pages, social }) => (
  <div className={styles.Menu}>
    <HeaderMenuPageList pages={pages} />
    <HeaderMenuIconList social={social} />
  </div>
);

export const HeaderMenu: VFC<Props> = ({ pages, social }) => {
  return <PureHeaderMenu pages={pages} social={social} />;
};

export type PureProps = Props;

export type Props = Omit<HeaderMenuPageListProps & HeaderMenuIconListProps, ''>;
