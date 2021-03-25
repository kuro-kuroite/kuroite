import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureProps as TocItemPureProps,
  PureTocItem as PureTocItemComponent,
} from './TocItem';

export default {
  title: 'css/common/toc/item',
} as Meta;

const Template: Story<PropsWithChildren<TocItemPureProps>> = (args) => (
  <PureTocItemComponent {...args} />
);

export const WrappedTocItem = Template.bind({});

const tocArgs = {
  isWrap: true,
  onTocIconClick: action('onTocIconClick'),
  tableOfContents:
    '<ul><li><p><a href="/blog/hello-world/#h1-1">h1-1</a></p><ul><li><a href="/blog/hello-world/#h2-1">h2-1</a></li><li><a href="/blog/hello-world/#h2-2">h2-2</a></li><li><a href="/blog/hello-world/#h2-3">h2-3</a></li></ul></li><li><p><a href="/blog/hello-world/#h1-2">h1 2</a></p><ul><li><a href="/blog/hello-world/#h2">h2</a></li></ul></li></ul>',
};
WrappedTocItem.args = {
  ...tocArgs,
  isWrap: true,
};

export const TocItem = Template.bind({});
TocItem.args = {
  ...tocArgs,
  isWrap: false,
};
