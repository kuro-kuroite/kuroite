import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureIconText as PureIconTextComponent,
  PureProps as IconTextPureProps,
} from './IconText';

export default {
  title: 'css/domain/blogs/icon/text',
} as Meta;

const Template: Story<PropsWithChildren<IconTextPureProps>> = (args) => (
  <PureIconTextComponent {...args} />
);

export const IconText = Template.bind({});
IconText.args = {
  createdAt: '08/22/2020',
};
