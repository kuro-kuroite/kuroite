import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import { PureLayout } from '../../Layout/Layout';
import {
  PureProgressBar as PureProgressBarComponent,
  PureProps as ProgressBarPureProps,
} from './ProgressBar';

export default {
  component: PureProgressBarComponent,
  title: 'components/Blog/ProgressBar',
} as Meta;

const Template: Story<PropsWithChildren<ProgressBarPureProps>> = (args) => (
  <PureProgressBarComponent {...args} />
);
const progressBarArgs: PropsWithChildren<ProgressBarPureProps> = {
  progress: 60,
};

export const ProgressBar = Template.bind({});
ProgressBar.args = progressBarArgs;

const LayoutTemplate: Story<PropsWithChildren<ProgressBarPureProps>> = (
  args
) => (
  <PureLayout social={{ gitHub: 'gitHubAccount' }} title="Gatsby About">
    <PureProgressBarComponent {...args} />
  </PureLayout>
);

export const ProgressBarLayout = LayoutTemplate.bind({});
ProgressBarLayout.args = progressBarArgs;
