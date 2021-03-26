import React, { VFC } from 'react';
import { RiPencilFill } from 'react-icons/ri';

import iconTextStyles from '../../../../common/icon/text/style.module.css';
import styles from './style.module.css';

export const PureIconText: VFC<PureProps> = ({ createdAt }) => (
  <span className={styles.createdAt}>
    (<RiPencilFill className={iconTextStyles.icon} />
    {createdAt})
  </span>
);

export type PureProps = {
  createdAt: string;
};
