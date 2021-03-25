import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureBlogsItem as PureBlogsItemComponent,
  PureProps as BlogsItemPureProps,
} from './BlogsItem';

export default {
  title: 'css/domain/blogs/item',
} as Meta;

const Template: Story<PropsWithChildren<BlogsItemPureProps>> = (args) => (
  <PureBlogsItemComponent {...args} />
);

export const BlogsItem = Template.bind({});
BlogsItem.args = {
  description: 'description',
  slug: '/gatsby/',
  title: 'React Gatsby',
};
