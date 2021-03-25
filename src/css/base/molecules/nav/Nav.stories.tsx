import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';

import styles from './style.module.css';

export default {
  title: 'css/base/molecules/nav',
} as Meta;

const Template: Story<HTMLAttributes<HTMLDivElement>> = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li>
        <a
          className={styles.navLink}
          href="https://en.wikipedia.org/wiki/Tomato"
          onClick={(e) => {
            e.preventDefault();
            action('onTomatoClick')(e);
          }}
        >
          tomato
        </a>
      </li>
      <li>
        <a
          className={styles.navLink}
          href="https://en.wikipedia.org/wiki/Banana"
          onClick={(e) => {
            e.preventDefault();
            action('onBananaClick')(e);
          }}
        >
          banana
        </a>
      </li>
      <li>
        <a
          className={styles.navLink}
          href="https://en.wikipedia.org/wiki/Peach"
          onClick={(e) => {
            e.preventDefault();
            action('onPeachClick')(e);
          }}
        >
          peach
        </a>
      </li>
      <li>
        <a
          className={styles.navLink}
          href="https://en.wikipedia.org/wiki/Orange_(fruit)"
          onClick={(e) => {
            e.preventDefault();
            action('onOrangeClick')(e);
          }}
        >
          orange
        </a>
      </li>
    </ul>
  </nav>
);

export const Nav = Template.bind({});
Nav.args = {};
