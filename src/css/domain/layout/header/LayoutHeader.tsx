import React, { VFC } from 'react';

import { Logo } from '../../../base/molecules/header/assets/Logo';
import headerStyles from '../../../base/molecules/header/style.module.css';
import { PureHeaderMenu } from './menu/HeaderMenu';
import styles from './style.module.css';

// NOTE: base/molecules/header/Header.stories.tsx と .banner 以外一致
export const PureLayoutHeader: VFC<PureProps> = () => (
  <header className={headerStyles.header}>
    <nav className={styles.nav}>
      <a
        aria-label="Logo"
        className={styles.banner}
        data-brand={'Logo'}
        href="/"
      >
        <Logo className={headerStyles.icon} />
      </a>
      <PureHeaderMenu />
    </nav>
  </header>
);

export type PureProps = Record<string, unknown>;
