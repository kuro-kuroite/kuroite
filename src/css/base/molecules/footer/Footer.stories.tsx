import type { Meta, Story } from '@storybook/react';
import React from 'react';

import styles from './style.module.css';

export default {
  title: 'css/base/molecules/footer',
} as Meta;

const Template: Story<PureProps> = ({ createdYear = 2020, year }) => (
  <footer className={styles.footer}>
    {/* TODO:  */}
    <nav></nav>
    <small className={styles.notice}>
      &copy;
      {`${year > createdYear ? `${createdYear}-` : ''}${year}`}
      <a className={styles.account} href="https://github.com/facebook/react/">
        @React
      </a>
    </small>
  </footer>
);

export const FooterNav2020 = Template.bind({});
FooterNav2020.args = {
  year: 2020,
};

export const FooterNav = Template.bind({});
FooterNav.args = {
  year: 2021,
};

type PureProps = { createdYear?: number; year: number };
