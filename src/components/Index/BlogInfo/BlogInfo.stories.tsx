import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureBlogInfo as PureBlogInfoComponent,
  PureProps as BlogInfoPureProps,
} from './BlogInfo';

export default {
  component: PureBlogInfoComponent,
  title: 'components/Index/BlogInfo',
} as Meta;

const Template: Story<PropsWithChildren<BlogInfoPureProps>> = (args) => (
  <PureBlogInfoComponent {...args} />
);

export const BlogInfo = Template.bind({});
BlogInfo.args = {
  createdAt: '08/22/2020',
  tags: ['React', 'TypeScript', 'Gatsby', 'TSX'],
  title: 'React Gatsby',
  updatedAt: '08/24/2020',
};
