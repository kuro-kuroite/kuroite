import type { Meta, Story } from '@storybook/react/types-6-0';
import React, { HTMLAttributes } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';

import { Logo } from './assets/Logo';
import styles from './style.module.css';

export default {
  title: 'css/base/molecules/header',
} as Meta;

const Template: Story<HTMLAttributes<HTMLDivElement>> = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <a
        aria-label="Logo"
        className={styles.banner}
        data-brand={'Logo'}
        href="/"
      >
        <Logo className={styles.icon} />
      </a>
      <div className={styles.menu}>
        <ul className={styles.navList}>
          <li key="Blog">
            <a className={styles.navLink} href="/blog/">
              blog
            </a>
          </li>
          <li key="About">
            <a className={styles.navLink} href="/about/">
              About
            </a>
          </li>
          <li key="React">
            <a
              aria-label="GitHub account page"
              className={styles.navIconLink}
              href="https://github.com/facebook/react/"
            >
              <VscGithubInverted />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export const Header = Template.bind({});
Header.args = {};
