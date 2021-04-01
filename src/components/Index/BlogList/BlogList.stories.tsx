import { Meta, Story } from '@storybook/react/types-6-0';
import React, { PropsWithChildren } from 'react';

import {
  PureBlogList as PureBlogListComponent,
  PureProps as BlogListPureProps,
} from './BlogList';

export default {
  component: PureBlogListComponent,
  title: 'components/Index/BlogList',
} as Meta;

const Template: Story<PropsWithChildren<BlogListPureProps>> = (args) => (
  <PureBlogListComponent {...args} />
);

export const BlogList: typeof Template = Template.bind({});
BlogList.args = {
  blogs: [
    {
      createdAt: '08/22/2020',
      description: 'description',
      slug: '/react-typescript/',
      tags: ['React', 'TypeScript'],
      title: 'React TypeScript',
      updatedAt: '08/24/2020',
    },
    {
      createdAt: '08/25/2020',
      description: 'description',
      slug: '/react-gatsby/',
      tags: ['React', 'Gatsby'],
      title: 'React Gatsby',
      updatedAt: '08/28/2020',
    },
  ],
};
