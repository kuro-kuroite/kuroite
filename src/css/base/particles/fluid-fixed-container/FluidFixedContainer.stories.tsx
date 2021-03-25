import type { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';

import styles from './style.module.css';

export default {
  title: 'css/base/particles/fluidFixedContainer',
} as Meta;

const Template: Story<HTMLAttributes<HTMLDivElement>> = (args) => (
  <div {...args} style={{ border: '1px solid red' }} />
);

export const FluidFixedContainer = Template.bind({});
FluidFixedContainer.args = {
  children: <h1 style={{ border: '1px solid orange' }}>hello world</h1>,
  className: styles.fluidFixedContainer,
};
