import React, { VFC } from 'react';

import styles from './style.module.css';

export const PureProgressItem: VFC<PureProps> = ({ progress }) => (
  <div className={progress > 0 ? styles.background : ''}>
    <div
      className={styles.item}
      style={{ width: `${progress > 100 ? 100 : progress}%` }}
    />
  </div>
);

export type PureProps = {
  progress: number;
};
