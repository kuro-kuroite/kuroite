import React from 'react';
import { MdUpdate } from 'react-icons/md';

import styles from './UpdatedAt.module.css';

export const PureUpdatedAt: React.VFC<PureProps> = ({ updatedAt }) => (
  <span className={styles.UpdatedAt}>
    <MdUpdate className={styles.WithIcon} />
    {updatedAt}
  </span>
);

export const UpdatedAt: React.VFC<Props> = ({ updatedAt }) => {
  return <PureUpdatedAt updatedAt={updatedAt} />;
};

export type PureProps = Props;

export type Props = {
  updatedAt: string;
};
