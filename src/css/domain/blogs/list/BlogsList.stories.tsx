import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureBlogsList as PureBlogsListComponent,
  PureProps as BlogsListPureProps,
} from './BlogsList';

export default {
  title: 'css/domain/blogs/list',
} as Meta;

const Template: Story<PropsWithChildren<BlogsListPureProps>> = (args) => (
  <PureBlogsListComponent {...args} />
);

export const BlogsList = Template.bind({});
BlogsList.args = {
  blogs: [
    {
      description: 'description',
      slug: '/react-typescript/',
      title: 'React TypeScript',
    },
    {
      description: 'description',
      slug: '/react-gatsby/',
      title: 'React Gatsby',
    },
  ],
};
