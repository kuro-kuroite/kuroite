import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureFooterNotice as PureFooterNoticeComponent,
  PureProps as FooterNoticePureProps,
} from './FooterNotice';

export default {
  component: PureFooterNoticeComponent,
  title: 'components/Layout/FooterNotice',
} as Meta;

const Template: Story<PropsWithChildren<FooterNoticePureProps>> = (args) => (
  <PureFooterNoticeComponent {...args} />
);

export const FooterNotice = Template.bind({});
FooterNotice.args = {
  createdYear: 2020,
  social: { gitHub: 'gitHubAccount' },
  year: 2021,
};
