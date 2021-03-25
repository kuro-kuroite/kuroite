import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureHeaderMenu as PureHeaderMenuComponent,
  PureProps as HeaderMenuPureProps,
} from './HeaderMenu';

export default {
  component: PureHeaderMenuComponent,
  title: 'components/Layout/HeaderMenu',
} as Meta;

const Template: Story<PropsWithChildren<HeaderMenuPureProps>> = (args) => (
  <PureHeaderMenuComponent {...args} />
);

export const HeaderMenu = Template.bind({});
HeaderMenu.args = {
  pages: [
    {
      title: 'blog',
      to: '/',
    },
    {
      title: 'about',
      to: '/about',
    },
  ],
  social: {
    gitHub: 'gitHubAccount',
  },
};
