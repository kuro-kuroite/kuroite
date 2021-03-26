import React from 'react';
import { RiPencilFill } from 'react-icons/ri';

import styles from './CreatedAt.module.css';

export const PureCreatedAt: React.VFC<PureProps> = ({ createdAt }) => (
  <span className={styles.CreatedAt}>
    (<RiPencilFill className={styles.WithIcon} />
    {createdAt})
  </span>
);

export const CreatedAt: React.VFC<Props> = ({ createdAt }) => {
  return <PureCreatedAt createdAt={createdAt} />;
};

export type PureProps = Props;

export type Props = {
  createdAt: string;
};
