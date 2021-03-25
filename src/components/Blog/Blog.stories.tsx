import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

// import { PureLayout } from '../Layout/Layout';
import { PureLayout } from '../Layout/Layout';
import {
  PureBlog as PureBlogComponent,
  PureProps as BlogPureProps,
} from './Blog';

export default {
  component: PureBlogComponent,
  title: 'components/Blog',
} as Meta;

const Template: Story<PropsWithChildren<BlogPureProps>> = (args) => (
  // HACK: All page content must be contained by landmarks
  <main>
    <PureBlogComponent {...args} />
  </main>
);
const blogArgs: PropsWithChildren<BlogPureProps> = {
  createdAt: '08/22/2020',
  html: '<div><h1>title</h1><p>hello world</p></div>',
  next: {
    slug: '/next/',
    title: 'next blog title',
  },
  previous: {
    slug: '/previous/',
    title: 'previous blog title',
  },
  tableOfContents:
    '<ul><li><p><a href="/blog/hello-world/#h1-1">h1-1</a></p><ul><li><a href="/blog/hello-world/#h2-1">h2-1</a></li><li><a href="/blog/hello-world/#h2-2">h2-2</a></li><li><a href="/blog/hello-world/#h2-3">h2-3</a></li></ul></li><li><p><a href="/blog/hello-world/#h1-2">h1 2</a></p><ul><li><a href="/blog/hello-world/#h2">h2</a></li></ul></li></ul>',
  tags: ['React', 'TypeScript'],
  title: 'React Gatsby',
  updatedAt: '08/24/2020',
  url: 'http://localhost:6006/',
};

export const Blog = Template.bind({});
Blog.args = blogArgs;

const LayoutTemplate: Story<PropsWithChildren<BlogPureProps>> = (args) => (
  <PureLayout social={{ gitHub: 'gitHubAccount' }} title="Gatsby Blog">
    <PureBlogComponent {...args} />
  </PureLayout>
);

export const BlogLayout = LayoutTemplate.bind({});
BlogLayout.args = blogArgs;
