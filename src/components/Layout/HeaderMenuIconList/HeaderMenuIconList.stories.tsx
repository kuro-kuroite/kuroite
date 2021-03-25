import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureHeaderMenuIconList as PureHeaderMenuIconListComponent,
  PureProps as HeaderMenuIconListPureProps,
} from './HeaderMenuIconList';

export default {
  component: PureHeaderMenuIconListComponent,
  title: 'components/Layout/HeaderMenuIconList',
} as Meta;

const Template: Story<PropsWithChildren<HeaderMenuIconListPureProps>> = (
  args
) => <PureHeaderMenuIconListComponent {...args} />;

export const HeaderMenuIconList = Template.bind({});
HeaderMenuIconList.args = {
  social: {
    gitHub: 'gitHubAccount',
  },
};
