import React, { VFC } from 'react';

import styles from './style.module.css';

export const PureFooterNav: VFC<PureProps> = () => (
  <nav aria-label="footer navigation" className={styles.nav}>
    <ul className={styles.list}>
      <li>
        <a className={styles.link} href="/privacy-policy/">
          Privacy Policy
        </a>
      </li>
    </ul>
    <ul className={styles.list}>
      <li>
        <span className={styles.link}>
          <span aria-label="Japanese icon" role="img">
            🇯🇵
          </span>
        </span>
      </li>
    </ul>
  </nav>
);

export type PureProps = Record<string, unknown>;
