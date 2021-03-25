import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureProps as TocButtonPureProps,
  PureTocButton as PureTocButtonComponent,
} from './TocButton';

export default {
  title: 'css/common/toc/button',
} as Meta;

const Template: Story<PropsWithChildren<TocButtonPureProps>> = (args) => (
  <PureTocButtonComponent {...args} />
);

export const TocButton = Template.bind({});
TocButton.args = {
  onTocClick: action('onTocClick'),
};
