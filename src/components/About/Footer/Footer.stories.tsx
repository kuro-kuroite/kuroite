import { Meta, Story } from '@storybook/react/types-6-0';
import React, { PropsWithChildren } from 'react';

import {
  PureFooter as PureFooterComponent,
  PureProps as FooterPureProps,
} from './Footer';

export default {
  component: PureFooterComponent,
  title: 'components/About/Footer',
} as Meta;

const Template: Story<PropsWithChildren<FooterPureProps>> = (args) => (
  <PureFooterComponent {...args} />
);

export const Footer: typeof Template = Template.bind({});
Footer.args = {
  title: 'About title',
  url: 'http://localhost:6006/about/',
};
