import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureProps as UpdatedAtPureProps,
  PureUpdatedAt as PureUpdatedAtComponent,
} from './UpdatedAt';

export default {
  component: PureUpdatedAtComponent,
  title: 'components/Index/UpdatedAt',
} as Meta;

const Template: Story<PropsWithChildren<UpdatedAtPureProps>> = (args) => (
  <PureUpdatedAtComponent {...args} />
);

export const UpdatedAt = Template.bind({});
UpdatedAt.args = {
  updatedAt: '08/24/2020',
};
