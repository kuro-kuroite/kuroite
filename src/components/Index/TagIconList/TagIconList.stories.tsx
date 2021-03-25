import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureProps as TagIconListPureProps,
  PureTagIconList as PureTagIconListComponent,
} from './TagIconList';

export default {
  component: PureTagIconListComponent,
  title: 'components/Index/TagIconList',
} as Meta;

const Template: Story<PropsWithChildren<TagIconListPureProps>> = (args) => (
  <PureTagIconListComponent {...args} />
);

export const TagIconList = Template.bind({});
TagIconList.args = {
  tags: ['React', 'TypeScript'],
  title: 'React Gatsby',
};
