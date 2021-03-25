import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import { PureLayoutPage } from '../../layout/page/LayoutPage';
import {
  PureNotFoundPage as PureNotFoundPageComponent,
  PureProps as NotFoundPagePureProps,
} from './NotFoundPage';

export default {
  title: 'css/domain/notFound/page',
} as Meta;

const Template: Story<PropsWithChildren<NotFoundPagePureProps>> = (args) => (
  <PureNotFoundPageComponent {...args} />
);

export const NotFoundPage = Template.bind({});
NotFoundPage.args = {};

const LayoutTemplate: Story<PropsWithChildren<NotFoundPagePureProps>> = (
  args
) => (
  <PureLayoutPage year={2020}>
    <PureNotFoundPageComponent {...args} />
  </PureLayoutPage>
);

export const NotFoundPageLayout = LayoutTemplate.bind({});
NotFoundPageLayout.args = {};
