import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureProgressItem as PureProgressItemComponent,
  PureProps as ProgressItemPureProps,
} from './ProgressItem';

export default {
  title: 'css/domain/blog/progress/item',
} as Meta;

const Template: Story<PropsWithChildren<ProgressItemPureProps>> = (args) => (
  <PureProgressItemComponent {...args} />
);

export const ProgressItem = Template.bind({});
ProgressItem.args = {
  progress: 60,
};
