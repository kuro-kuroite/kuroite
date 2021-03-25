import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureIconText as PureIconTextComponent,
  PureProps as IconTextPureProps,
} from './IconText';

export default {
  title: 'css/common/icon/text',
} as Meta;

const Template: Story<PropsWithChildren<IconTextPureProps>> = (args) => (
  <PureIconTextComponent {...args} />
);

export const IconText = Template.bind({});
IconText.args = {
  text: 'text',
};
