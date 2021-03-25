import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureLogoLink as PureLogoLinkComponent,
  PureProps as LogoLinkPureProps,
} from './LogoLink';

export default {
  component: PureLogoLinkComponent,
  title: 'components/Layout/LogoLink',
} as Meta;

const Template: Story<PropsWithChildren<LogoLinkPureProps>> = (args) => (
  <PureLogoLinkComponent {...args} />
);

export const LogoLink = Template.bind({});
LogoLink.args = {
  title: 'Blog',
};
