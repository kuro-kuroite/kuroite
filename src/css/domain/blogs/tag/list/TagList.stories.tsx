import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureProps as TagListPureProps,
  PureTagList as PureTagListComponent,
} from './TagList';

export default {
  title: 'css/domain/blogs/tag/list',
} as Meta;

const Template: Story<PropsWithChildren<TagListPureProps>> = (args) => (
  <PureTagListComponent {...args} />
);

export const TagList = Template.bind({});
TagList.args = {
  tags: ['React', 'TypeScript'],
};
