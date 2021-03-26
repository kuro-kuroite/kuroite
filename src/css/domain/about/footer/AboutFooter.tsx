import React, { VFC } from 'react';
import { RiTwitterFill } from 'react-icons/ri';

import styles from './style.module.css';

export const PureAboutFooter: VFC<PureProps> = () => (
  <div className={styles.footer}>
    <nav aria-label="blog footer navigation" className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <ul className={styles.navList}>
            <li>
              <a
                aria-label="go to gatsby page"
                className={styles.navLink}
                href="https://www.gatsbyjs.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <RiTwitterFill />
              </a>
            </li>
            <li>
              <a
                aria-label="go to gatsby page"
                className={styles.navLink}
                href="https://www.gatsbyjs.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <RiTwitterFill />
              </a>
            </li>
            <li>
              <a
                aria-label="go to gatsby page"
                className={styles.navLink}
                href="https://www.gatsbyjs.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <RiTwitterFill />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
);

export type PureProps = Record<string, unknown>;
