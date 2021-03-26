import React, { MouseEventHandler, VFC } from 'react';

import styles from './style.module.css';

export const PureToggleIcon: VFC<PureProps> = ({ mode, onClick }) => (
  <label className={styles.toggleIcon}>
    <input
      aria-label={mode === 'on' ? 'off' : 'on'}
      className={styles.checkbox}
      data-testid="toggleIconCheckbox"
      onClick={onClick}
      type="checkbox"
    />
    {mode === 'on' ? (
      <span className={styles.icon}>off</span>
    ) : (
      <span className={styles.icon}>on</span>
    )}
  </label>
);

export type PureProps = {
  mode: 'on' | 'off';
  onClick: MouseEventHandler<HTMLInputElement>;
};
