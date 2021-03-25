import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import { PureLayout } from '../Layout/Layout';
import {
  PureNotFound as PureNotFoundComponent,
  PureProps as NotFoundPureProps,
} from './NotFound';

export default {
  component: PureNotFoundComponent,
  title: 'components/NotFound',
} as Meta;

const Template: Story<PropsWithChildren<NotFoundPureProps>> = (args) => (
  <PureNotFoundComponent {...args} />
);

export const NotFound = Template.bind({});
NotFound.args = {};

const LayoutTemplate: Story<PropsWithChildren<NotFoundPureProps>> = (args) => (
  <PureLayout social={{ gitHub: 'gitHubAccount' }} title="Gatsby Blog">
    <PureNotFoundComponent {...args} />
  </PureLayout>
);

export const NotFoundLayout = LayoutTemplate.bind({});
NotFoundLayout.args = {};
