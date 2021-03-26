import React, { MouseEventHandler, VFC } from 'react';
import { MdFormatListBulleted } from 'react-icons/md';

import styles from './style.module.css';

export const PureTocButton: VFC<PureProps> = ({ onTocClick }) => (
  <button
    aria-label="Toc button"
    className={styles.button}
    onClick={onTocClick}
  >
    <MdFormatListBulleted />
  </button>
);

export type PureProps = {
  onTocClick: MouseEventHandler<HTMLButtonElement>;
};
