import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureLayout as PureLayoutComponent,
  PureProps as LayoutPureProps,
} from './Layout';

export default {
  component: PureLayoutComponent,
  title: 'components/Layout',
} as Meta;

const Template: Story<PropsWithChildren<LayoutPureProps>> = (args) => (
  <PureLayoutComponent {...args} />
);

export const Layout = Template.bind({});
Layout.args = {
  children: <h1>hello world</h1>,
  social: {
    gitHub: 'gitHubAccount',
  },
  title: 'Gatsby Blog',
};
