import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureHeaderMenu as PureHeaderMenuComponent,
  PureProps as HeaderMenuPureProps,
} from './HeaderMenu';

export default {
  title: 'css/domain/layout/header/menu',
} as Meta;

const Template: Story<PropsWithChildren<HeaderMenuPureProps>> = (args) => (
  <PureHeaderMenuComponent {...args} />
);

export const HeaderMenu = Template.bind({});
HeaderMenu.args = {};
