import React, { VFC } from 'react';
import { RiTwitterFill } from 'react-icons/ri';

import styles from './style.module.css';

export const PureIconText: VFC<PureProps> = ({ text }) => (
  <span className={styles.text}>
    <RiTwitterFill className={styles.icon} />
    {text}
  </span>
);

export type PureProps = {
  text: string;
};
