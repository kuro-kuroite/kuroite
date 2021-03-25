import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureProps as ToggleIconPureProps,
  PureToggleIcon as PureToggleIconComponent,
} from './ToggleIcon';

export default {
  title: 'css/case/toggle/icon',
} as Meta;

const Template: Story<PropsWithChildren<ToggleIconPureProps>> = (args) => (
  <PureToggleIconComponent {...args} />
);

export const ToggleIcon = Template.bind({});
ToggleIcon.args = {
  mode: 'on',
  onClick: action('onClick'),
};
