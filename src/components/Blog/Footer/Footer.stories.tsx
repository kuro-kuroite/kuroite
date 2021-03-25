import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureFooter as PureFooterComponent,
  PureProps as FooterPureProps,
} from './Footer';

export default {
  component: PureFooterComponent,
  title: 'components/Blog/Footer',
} as Meta;

const Template: Story<PropsWithChildren<FooterPureProps>> = (args) => (
  <PureFooterComponent {...args} />
);

export const Footer = Template.bind({});
Footer.args = {
  next: {
    slug: '/about/',
    title: 'about',
  },
  previous: {
    slug: '/about/',
    title: 'about',
  },
  title: 'blog title',
  url: 'http://localhost:6006/about/',
};
