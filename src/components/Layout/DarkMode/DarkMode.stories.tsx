import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureDarkMode as PureDarkModeComponent,
  PureProps as DarkModePureProps,
} from './DarkMode';

export default {
  component: PureDarkModeComponent,
  title: 'components/Layout/DarkMode',
} as Meta;

const Template: Story<PropsWithChildren<DarkModePureProps>> = (args) => (
  <PureDarkModeComponent {...args} />
);

export const DarkModeIcon = Template.bind({});
DarkModeIcon.args = {
  mode: 'light',
  onClick: action('onClick'),
};

export const LightModeIcon = Template.bind({});
LightModeIcon.args = {
  mode: 'dark',
  onClick: action('onClick'),
};
