import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureHeaderMenuPageList as PureHeaderMenuPageListComponent,
  PureProps as HeaderMenuPageListPureProps,
} from './HeaderMenuPageList';

export default {
  component: PureHeaderMenuPageListComponent,
  title: 'components/Layout/HeaderMenuPageList',
} as Meta;

const Template: Story<PropsWithChildren<HeaderMenuPageListPureProps>> = (
  args
) => <PureHeaderMenuPageListComponent {...args} />;

export const HeaderMenuPageList = Template.bind({});
HeaderMenuPageList.args = {
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
};
