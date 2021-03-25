import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureFooterInfo as PureFooterInfoComponent,
  PureProps as FooterInfoPureProps,
} from './FooterInfo';

export default {
  component: PureFooterInfoComponent,
  title: 'components/Blog/FooterInfo',
} as Meta;

const Template: Story<PropsWithChildren<FooterInfoPureProps>> = (args) => (
  <PureFooterInfoComponent {...args} />
);

export const FooterInfo = Template.bind({});

const previous = { slug: '/previous/', title: 'previous title' };
const next = { slug: '/next/', title: 'next title' };
FooterInfo.args = {
  next: next,
  previous: previous,
};

const PreviousTemplate: Story<PropsWithChildren<FooterInfoPureProps>> = (
  args
) => <PureFooterInfoComponent {...args} />;

export const FooterPreviousInfo: typeof PreviousTemplate = PreviousTemplate.bind(
  {}
);
FooterPreviousInfo.args = {
  previous: previous,
};

const NextTemplate: Story<PropsWithChildren<FooterInfoPureProps>> = (args) => (
  <PureFooterInfoComponent {...args} />
);

export const FooterNextInfo: typeof NextTemplate = NextTemplate.bind({});
FooterNextInfo.args = {
  next: next,
};
