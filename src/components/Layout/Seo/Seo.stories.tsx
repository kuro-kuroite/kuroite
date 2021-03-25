import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import { PureProps as SeoPureProps, PureSeo as PureSeoComponent } from './Seo';

export default {
  component: PureSeoComponent,
  title: 'components/Layout/Seo',
} as Meta;

const Template: Story<PropsWithChildren<SeoPureProps>> = (args) => (
  <PureSeoComponent {...args} />
);

export const Seo = Template.bind({});
Seo.args = {
  description: 'sample for Markdown',
  image: {
    slug: 'http://localhost:6006/favicon.svg',
  },
  lang: 'ja',
  meta: [],
  siteTitle: 'Sample',
  socials: {
    twitter: 'twitterAccount',
  },
  title: 'Gatsby Blog',
};
