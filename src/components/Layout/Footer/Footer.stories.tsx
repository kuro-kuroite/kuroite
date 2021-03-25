import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureFooter as PureFooterComponent,
  PureProps as FooterPureProps,
} from './Footer';

export default {
  component: PureFooterComponent,
  title: 'components/Layout/Footer',
} as Meta;

const Template: Story<PropsWithChildren<FooterPureProps>> = (args) => (
  <PureFooterComponent {...args} />
);

export const Footer = Template.bind({});
Footer.args = {
  createdYear: 2020,
  social: { gitHub: 'gitHubAccount' },
  year: 2021,
};
