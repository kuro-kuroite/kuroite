import { Link } from 'gatsby';
import React, { VFC } from 'react';

import styles from './HeaderMenuPageItem.module.css';

export const PureHeaderMenuPageItem: VFC<PureProps> = ({ title, to }) => (
  <Link className={styles.Link} to={to}>
    {title}
  </Link>
);

export const HeaderMenuPageItem: VFC<Props> = ({ title, to }) => {
  return <PureHeaderMenuPageItem title={title} to={to} />;
};

export type PureProps = Props;

export type Props = {
  title: string;
  to: string;
};
