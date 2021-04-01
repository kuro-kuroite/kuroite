import { Meta, Story } from '@storybook/react/types-6-0';
import React, { PropsWithChildren } from 'react';

import { PureLayout } from '../Layout/Layout';
import {
  PureIndex as PureIndexComponent,
  PureProps as IndexPureProps,
} from './Index';

export default {
  component: PureIndexComponent,
  title: 'components/Index',
} as Meta;

const Template: Story<PropsWithChildren<IndexPureProps>> = (args) => (
  <PureIndexComponent {...args} />
);

export const Index: typeof Template = Template.bind({});

const indexArgs = {
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

Index.args = indexArgs;

const LayoutTemplate: Story<PropsWithChildren<IndexPureProps>> = (args) => (
  <PureLayout social={{ gitHub: 'gitHubAccount' }} title="Gatsby Blog">
    <PureIndexComponent {...args} />
  </PureLayout>
);

export const IndexLayout: typeof LayoutTemplate = LayoutTemplate.bind({});
IndexLayout.args = indexArgs;
