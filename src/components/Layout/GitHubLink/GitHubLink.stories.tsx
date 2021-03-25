import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import {
  PureGitHubLink as PureGitHubLinkComponent,
  PureProps as GitHubLinkPureProps,
} from './GitHubLink';

export default {
  component: PureGitHubLinkComponent,
  title: 'components/Layout/GitHubLink',
} as Meta;

const Template: Story<PropsWithChildren<GitHubLinkPureProps>> = (args) => (
  <PureGitHubLinkComponent {...args} />
);

export const GitHubLink = Template.bind({});
GitHubLink.args = {
  account: 'gitHubAccount',
};
