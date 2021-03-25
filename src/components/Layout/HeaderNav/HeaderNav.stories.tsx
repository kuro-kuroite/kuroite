import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureHeaderNav as PureHeaderNavComponent,
  PureProps as HeaderNavPureProps,
} from './HeaderNav';

export default {
  component: PureHeaderNavComponent,
  title: 'components/Layout/HeaderNav',
} as Meta;

const Template: Story<PropsWithChildren<HeaderNavPureProps>> = (args) => (
  <PureHeaderNavComponent {...args} />
);

export const HeaderNav = Template.bind({});
HeaderNav.args = {
  pages: [
    {
      title: 'blog',
      to: '/',
    },
    {
      title: 'about',
      to: '/about/',
    },
  ],
  social: {
    gitHub: 'gitHubAccount',
  },
  title: 'Blog',
};
