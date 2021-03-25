import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureBlogFooter as PureBlogFooterComponent,
  PureProps as BlogFooterPureProps,
} from './BlogFooter';

export default {
  title: 'css/domain/blog/footer',
} as Meta;

const Template: Story<PropsWithChildren<BlogFooterPureProps>> = (args) => (
  <PureBlogFooterComponent {...args} />
);

export const BlogFooter = Template.bind({});
BlogFooter.args = {};
