import { Meta, Story } from '@storybook/react/types-6-0';
import React, { PropsWithChildren } from 'react';

import { PureLayout } from '../Layout/Layout';
import { PureProps as TagPureProps, PureTag as PureTagComponent } from './Tag';

export default {
  component: PureTagComponent,
  title: 'components/Tag',
} as Meta;

const Template: Story<PropsWithChildren<TagPureProps>> = (args) => (
  <PureTagComponent {...args} />
);
const tagArgs: PropsWithChildren<TagPureProps> = {
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
  tag: 'React',
};

export const Tag: typeof Template = Template.bind({});
Tag.args = tagArgs;

const LayoutTemplate: Story<PropsWithChildren<TagPureProps>> = (args) => (
  <PureLayout social={{ gitHub: 'gitHubAccount' }} title="blog">
    <PureTagComponent {...args} />
  </PureLayout>
);

export const TagLayout: typeof LayoutTemplate = LayoutTemplate.bind({});
TagLayout.args = tagArgs;
