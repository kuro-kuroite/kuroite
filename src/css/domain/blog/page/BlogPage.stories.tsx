import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import { PureLayoutPage } from '../../layout/page/LayoutPage';
import {
  PureBlogPage as PureBlogPageComponent,
  PureProps as BlogPagePureProps,
} from './BlogPage';

export default {
  title: 'css/domain/blog/page',
} as Meta;

const Template: Story<PropsWithChildren<BlogPagePureProps>> = (args) => (
  // HACK: All page content must be contained by landmarks
  <main>
    <PureBlogPageComponent {...args} />
  </main>
);
const blogPageArgs: PropsWithChildren<BlogPagePureProps> = {
  createdAt: '08/22/2020',
  html: '<div><h1>title</h1><p>hello world</p></div>',
  isWrap: false,
  onTocClick: action('onTocClick'),
  progress: 60,
  tableOfContents:
    '<ul><li><p><a href="/blog/hello-world/#h1-1">h1-1</a></p><ul><li><a href="/blog/hello-world/#h2-1">h2-1</a></li><li><a href="/blog/hello-world/#h2-2">h2-2</a></li><li><a href="/blog/hello-world/#h2-3">h2-3</a></li></ul></li><li><p><a href="/blog/hello-world/#h1-2">h1 2</a></p><ul><li><a href="/blog/hello-world/#h2">h2</a></li></ul></li></ul>',
  tags: ['React', 'TypeScript'],
  title: 'React Gatsby',
  updatedAt: '08/24/2020',
};

export const BlogPage = Template.bind({});
BlogPage.args = {
  ...blogPageArgs,
  progress: 0,
};

const LayoutTemplate: Story<PropsWithChildren<BlogPagePureProps>> = (args) => (
  <PureLayoutPage year={2020}>
    <PureBlogPageComponent {...args} />
  </PureLayoutPage>
);

export const BlogPageLayout = LayoutTemplate.bind({});
BlogPageLayout.args = blogPageArgs;
