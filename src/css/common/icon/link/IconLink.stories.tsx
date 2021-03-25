import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureIconLink as PureIconLinkComponent,
  PureProps as IconLinkPureProps,
} from './IconLink';

export default {
  title: 'css/common/icon/link',
} as Meta;

const Template: Story<PropsWithChildren<IconLinkPureProps>> = (args) => (
  <PureIconLinkComponent {...args} />
);

export const IconLink = Template.bind({});
IconLink.args = {};
