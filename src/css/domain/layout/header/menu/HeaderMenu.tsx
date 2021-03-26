import React, { VFC } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';

import headerStyles from '../../../../base/molecules/header/style.module.css';
import styles from './style.module.css';

export const PureHeaderMenu: VFC<PureProps> = () => (
  <div className={styles.menu}>
    {/* NOTE: PageList */}
    <ul className={headerStyles.navList}>
      <li key="Blog">
        <a className={headerStyles.navLink} href="/blog/">
          blog
        </a>
      </li>
      <li key="About">
        <a className={headerStyles.navLink} href="/about/">
          About
        </a>
      </li>
    </ul>
    {/* NOTE: IconList */}
    <ul className={headerStyles.navList}>
      <li key="React">
        <a
          aria-label="GitHub account page"
          className={headerStyles.navIconLink}
          href="https://github.com/facebook/react/"
        >
          <VscGithubInverted />
        </a>
      </li>
    </ul>
  </div>
);

export type PureProps = Record<string, unknown>;
