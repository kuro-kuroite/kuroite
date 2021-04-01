import { Meta, Story } from '@storybook/react/types-6-0';
import React, { PropsWithChildren } from 'react';

import { PureLayout } from '../../Layout/Layout';
import {
  PureBlogItem as PureBlogItemComponent,
  PureProps as BlogItemPureProps,
} from './BlogItem';

export default {
  component: PureBlogItemComponent,
  title: 'components/Index/BlogItem',
} as Meta;

const Template: Story<PropsWithChildren<BlogItemPureProps>> = (args) => (
  <PureBlogItemComponent {...args} />
);
const blogItemArgs: PropsWithChildren<BlogItemPureProps> = {
  createdAt: '08/22/2020',
  description: 'description',
  slug: '/gatsby/',
  tags: ['React', 'TypeScript', 'Gatsby', 'TSX'],
  title: 'React Gatsby',
  updatedAt: '08/24/2020',
};

export const BlogItem: typeof Template = Template.bind({});
BlogItem.args = blogItemArgs;

const LayoutTemplate: Story<PropsWithChildren<BlogItemPureProps>> = (args) => (
  <PureLayout social={{ gitHub: 'gitHubAccount' }} title="blog">
    <PureBlogItemComponent {...args} />
  </PureLayout>
);

export const BlogItemLayout: typeof LayoutTemplate = LayoutTemplate.bind({});
BlogItemLayout.args = blogItemArgs;
