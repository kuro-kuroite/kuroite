import type { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';

import styles from './style.module.css';

export default {
  title: 'css/base/particles/alignLineHeight',
} as Meta;

const Template: Story<HTMLAttributes<HTMLDivElement>> = (args) => (
  <div {...args} style={{ border: '1px solid orange' }} />
);
const children =
  'tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato tomato ';

export const AlignLineHeight = Template.bind({});
AlignLineHeight.args = {
  children: children,
  className: styles.alignLineHeight,
};

export const AlignLineHeightSm = Template.bind({});
AlignLineHeightSm.args = {
  children: children,
  className: styles.alignLineHeightSm,
};

export const AlignLineHeightMd = Template.bind({});
AlignLineHeightMd.args = {
  children: children,
  className: styles.alignLineHeightMd,
};
