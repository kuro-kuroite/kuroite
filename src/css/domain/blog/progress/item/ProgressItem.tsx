import React, { VFC } from 'react';

import { PureProps as ProgressItemPureProps } from '../../../../common/progress/item/ProgressItem';
import styles from './style.module.css';

export const PureProgressItem: VFC<PureProps> = ({ progress }) => (
  <div className={progress > 0 ? styles.background : ''}>
    <div
      className={styles.item}
      style={{ width: `${progress > 100 ? 100 : progress}%` }}
    />
  </div>
);

export type PureProps = ProgressItemPureProps;
