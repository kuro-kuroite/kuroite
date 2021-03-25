import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureLayoutFooter as PureLayoutFooterComponent,
  PureProps as LayoutFooterPureProps,
} from './LayoutFooter';

export default {
  title: 'css/domain/layout/footer',
} as Meta;

const Template: Story<PropsWithChildren<LayoutFooterPureProps>> = (args) => (
  <PureLayoutFooterComponent {...args} />
);

export const LayoutFooter = Template.bind({});
LayoutFooter.args = {};
