import type { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';

import styles from './style.module.css';

export default {
  title: 'css/base/particles/alignText',
} as Meta;

const Template: Story<HTMLAttributes<HTMLDivElement>> = (args) => (
  <div
    style={{
      border: '1px solid red',
      height: '100%',
      padding: '1rem',
      width: '100%',
    }}
  >
    {/* NOTE: argsのchildrenを使用するため */}
    {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
    <h1 {...args} style={{ border: '1px solid orange', padding: '1rem' }} />
    <p {...args} style={{ border: '1px solid blue', padding: '1rem' }} />
  </div>
);
const children = 'tomato';

export const AlignTextCenter = Template.bind({});
AlignTextCenter.args = {
  children: children,
  className: styles.alignTextCenter,
};

export const AlignTextCenterCrossAxis = Template.bind({});
AlignTextCenterCrossAxis.args = {
  children: children,
  className: styles.alignTextCenterCrossAxis,
};

export const AlignTextCenterMainAxis = Template.bind({});
AlignTextCenterMainAxis.args = {
  children: children,
  className: styles.alignTextCenterMainAxis,
};
