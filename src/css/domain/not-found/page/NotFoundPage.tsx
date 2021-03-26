import React, { VFC } from 'react';

import styles from './style.module.css';

export const PureNotFoundPage: VFC<PureProps> = () => (
  <section>
    <h1 className={styles.title}>404: Not Found</h1>
    <p className={styles.description}>this page does&apos;nt exist</p>
    <a className={styles.link} href="/">
      ← Back to top page
    </a>
  </section>
);

export type PureProps = Record<string, unknown>;
