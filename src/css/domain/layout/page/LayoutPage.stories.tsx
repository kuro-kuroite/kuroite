import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureLayoutPage as PureLayoutPageComponent,
  PureProps as LayoutPagePureProps,
} from './LayoutPage';

export default {
  title: 'css/domain/layout/page',
} as Meta;

const Template: Story<PropsWithChildren<LayoutPagePureProps>> = (args) => (
  <PureLayoutPageComponent {...args} />
);

export const LayoutPage = Template.bind({});
LayoutPage.args = {
  children: <h1>hello world</h1>,
  createdYear: 2020,
  year: 2021,
};
