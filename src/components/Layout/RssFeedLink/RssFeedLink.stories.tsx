import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureProps as RssFeedLinkPureProps,
  PureRssFeedLink as PureRssFeedLinkComponent,
} from './RssFeedLink';

export default {
  component: PureRssFeedLinkComponent,
  title: 'components/Layout/RssFeedLink',
} as Meta;

const Template: Story<PropsWithChildren<RssFeedLinkPureProps>> = (args) => (
  <PureRssFeedLinkComponent {...args} />
);

export const RssFeedLink = Template.bind({});
RssFeedLink.args = {};
