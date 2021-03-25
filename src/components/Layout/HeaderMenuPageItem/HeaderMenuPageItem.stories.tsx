import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureHeaderMenuPageItem as PureHeaderMenuPageItemComponent,
  PureProps as HeaderMenuPageItemPureProps,
} from './HeaderMenuPageItem';

export default {
  component: PureHeaderMenuPageItemComponent,
  title: 'components/Layout/HeaderMenuPageItem',
} as Meta;

const Template: Story<PropsWithChildren<HeaderMenuPageItemPureProps>> = (
  args
) => <PureHeaderMenuPageItemComponent {...args} />;

export const HeaderMenuPageItem = Template.bind({});
HeaderMenuPageItem.args = {
  title: 'blog',
  to: '/',
};
