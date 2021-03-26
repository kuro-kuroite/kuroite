import React, { VFC } from 'react';

import { HeaderNav, Props as HeaderNavProps } from '../HeaderNav/HeaderNav';
import styles from './Header.module.css';

export const PureHeader: VFC<PureProps> = ({ social, title }) => (
  <header className={styles.Header}>
    <HeaderNav social={social} title={title} />
  </header>
);

export const Header: VFC<Props> = ({ social, title }) => {
  return <PureHeader social={social} title={title} />;
};

export type PureProps = Props;

export type Props = HeaderNavProps;
