import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureItemInfo as PureItemInfoComponent,
  PureProps as ItemInfoPureProps,
} from './ItemInfo';

export default {
  title: 'css/domain/blogs/item/info',
} as Meta;

const Template: Story<PropsWithChildren<ItemInfoPureProps>> = (args) => (
  <PureItemInfoComponent {...args} />
);

export const ItemInfo = Template.bind({});
ItemInfo.args = {
  createdAt: '08/22/2020',
  tags: ['React', 'TypeScript', 'Gatsby', 'TSX'],
  updatedAt: '08/24/2020',
};
