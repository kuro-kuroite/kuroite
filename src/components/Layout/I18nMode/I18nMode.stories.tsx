import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureI18nMode as PureI18nModeComponent,
  PureProps as I18nModePureProps,
} from './I18nMode';

export default {
  component: PureI18nModeComponent,
  title: 'components/Layout/I18nMode',
} as Meta;

const Template: Story<PropsWithChildren<I18nModePureProps>> = (args) => (
  <PureI18nModeComponent {...args} />
);

export const EnMode = Template.bind({});
EnMode.args = {
  mode: 'en',
  onClick: action('onClick'),
};

export const JaMode = Template.bind({});
JaMode.args = {
  mode: 'ja',
  onClick: action('onClick'),
};
