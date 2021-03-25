import type { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';

import styles from './style.module.css';

export default {
  title: 'css/base/molecules/layout',
} as Meta;

const Template: Story<HTMLAttributes<HTMLDivElement>> = () => (
  <div className={styles.container} style={{ border: '1px solid red' }}>
    <header style={{ border: '1px solid orange' }}>header</header>
    <main style={{ border: '1px solid orange' }}>main</main>
    <footer style={{ border: '1px solid orange' }}>footer</footer>
  </div>
);

export const Layout = Template.bind({});
Layout.args = {};
