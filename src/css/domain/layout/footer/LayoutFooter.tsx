import React, { VFC } from 'react';

import footerStyles from '../../../base/molecules/footer/style.module.css';
import styles from './style.module.css';

export const PureLayoutFooter: VFC<PureProps> = ({
  createdYear = 2020,
  year = new Date().getFullYear(),
}) => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <small className={styles.notice}>
        &copy;
        {`${year > createdYear ? `${createdYear}-` : ''}${year}`}
        <a className={footerStyles.account} href="https://github.com/facebook/">
          @facebook
        </a>
      </small>
    </div>
  </footer>
);

export type PureProps = { createdYear?: number; year: number };
