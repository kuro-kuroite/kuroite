import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureProps as TocIconPureProps,
  PureTocIcon as PureTocIconComponent,
} from './TocIcon';

export default {
  component: PureTocIconComponent,

  title: 'components/Blog/TocIcon',
} as Meta;

const Template: Story<PropsWithChildren<TocIconPureProps>> = (args) => (
  <PureTocIconComponent {...args} />
);

export const TocIcon = Template.bind({});
TocIcon.args = {
  onTocIconClick: action('onTocIconClick'),
};
