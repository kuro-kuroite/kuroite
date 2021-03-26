import React, { VFC } from 'react';

import styles from './style.module.css';

export const PureFooterInfo: VFC<PureProps> = ({ next, previous }) => (
  <div className={styles.info}>
    <nav aria-label="blog pager navigation" className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          {previous?.slug && (
            <a className={styles.navLink} href={previous.slug} rel="prev">
              ← {previous.title}
            </a>
          )}
        </li>
        <li>
          {next?.slug && (
            <a className={styles.navLink} href={next.slug} rel="next">
              {next.title} →
            </a>
          )}
        </li>
      </ul>
    </nav>
  </div>
);

export type PureProps = {
  next?: {
    slug: string;
    title: string;
  };
  previous?: {
    slug: string;
    title: string;
  };
};
