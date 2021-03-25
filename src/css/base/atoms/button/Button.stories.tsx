import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';
import { withPseudo } from 'storybook-addon-pseudo-states-react';

import styles from './style.module.css';

export default {
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      attributes: ['disabled', 'readonly', 'error'],
      selector: ['button', 'a'],
    },
  },
  title: 'css/base/atoms/button',
} as Meta;

const Template: Story<HTMLAttributes<HTMLButtonElement>> = (args) => (
  <button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'primary',
  className: styles.primary,
  onClick: action('onClick'),
};

export const Normal = Template.bind({});
Normal.args = {
  children: 'normal',
  className: styles.normal,
  onClick: action('onClick'),
};

export const OutlineNormal = Template.bind({});
OutlineNormal.args = {
  children: 'outline normal',
  className: styles.outlineNormal,
  onClick: action('onClick'),
};

const ButtonListTemplate: Story<HTMLAttributes<HTMLButtonElement>> = () => (
  <>
    <button className={styles.button}>button</button>
    <a className={styles.button} href="/nop">
      link
    </a>
  </>
);

export const ButtonList: typeof ButtonListTemplate = ButtonListTemplate.bind(
  {}
);
