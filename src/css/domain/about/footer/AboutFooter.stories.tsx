import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureAboutFooter as PureAboutFooterComponent,
  PureProps as AboutFooterPureProps,
} from './AboutFooter';

export default {
  title: 'css/domain/about/footer',
} as Meta;

const Template: Story<PropsWithChildren<AboutFooterPureProps>> = (args) => (
  <PureAboutFooterComponent {...args} />
);

export const AboutFooter = Template.bind({});
AboutFooter.args = {};
