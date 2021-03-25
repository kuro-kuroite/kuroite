import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureHeader as PureHeaderComponent,
  PureProps as HeaderPureProps,
} from './Header';

export default {
  component: PureHeaderComponent,
  title: 'components/Layout/Header',
} as Meta;

const Template: Story<PropsWithChildren<HeaderPureProps>> = (args) => (
  <PureHeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {
  social: {
    gitHub: 'gitHubAccount',
  },
  title: 'Blog',
};
