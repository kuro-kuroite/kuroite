import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureCreatedAt as PureCreatedAtComponent,
  PureProps as CreatedAtPureProps,
} from './CreatedAt';

export default {
  component: PureCreatedAtComponent,
  title: 'components/Index/CreatedAt',
} as Meta;

const Template: Story<PropsWithChildren<CreatedAtPureProps>> = (args) => (
  <PureCreatedAtComponent {...args} />
);

export const CreatedAt = Template.bind({});
CreatedAt.args = {
  createdAt: '08/22/2020',
};
