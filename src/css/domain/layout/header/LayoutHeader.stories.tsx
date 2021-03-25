import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureLayoutHeader as PureLayoutHeaderComponent,
  PureProps as LayoutHeaderPureProps,
} from './LayoutHeader';

export default {
  title: 'css/domain/layout/header',
} as Meta;

const Template: Story<PropsWithChildren<LayoutHeaderPureProps>> = (args) => (
  <PureLayoutHeaderComponent {...args} />
);

export const LayoutHeader = Template.bind({});
LayoutHeader.args = {};
