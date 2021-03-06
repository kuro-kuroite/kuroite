import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureFooterNav as PureFooterNavComponent,
  PureProps as FooterNavPureProps,
} from './FooterNav';

export default {
  title: 'css/domain/layout/footer/nav',
} as Meta;

const Template: Story<PropsWithChildren<FooterNavPureProps>> = (args) => (
  <PureFooterNavComponent {...args} />
);

export const FooterNav = Template.bind({});
FooterNav.args = {};
