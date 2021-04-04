import { Meta, Story } from '@storybook/react/types-6-0';
import React, { PropsWithChildren } from 'react';

import { PureLayout } from '../Layout/Layout';
import {
  PurePrivacyPolicy as PurePrivacyPolicyComponent,
  PureProps as PrivacyPolicyPureProps,
} from './PrivacyPolicy';

export default {
  component: PurePrivacyPolicyComponent,
  title: 'components/PrivacyPolicy',
} as Meta;

const Template: Story<PropsWithChildren<PrivacyPolicyPureProps>> = (args) => (
  // HACK: All page content must be contained by landmarks
  <main>
    <PurePrivacyPolicyComponent {...args} />
  </main>
);
const privacyPolicyArgs: PropsWithChildren<PrivacyPolicyPureProps> = {
  createdAt: '08/22/2020',
  html: '<div><h1>title</h1><p>hello world</p></div>',
  tableOfContents:
    '<ul><li><p><a href="/blog/hello-world/#h1-1">h1-1</a></p><ul><li><a href="/blog/hello-world/#h2-1">h2-1</a></li><li><a href="/blog/hello-world/#h2-2">h2-2</a></li><li><a href="/blog/hello-world/#h2-3">h2-3</a></li></ul></li><li><p><a href="/blog/hello-world/#h1-2">h1 2</a></p><ul><li><a href="/blog/hello-world/#h2">h2</a></li></ul></li></ul>',
  tags: ['React', 'TypeScript'],
  title: 'Privacy Policy',
  updatedAt: '08/24/2020',
};

export const PrivacyPolicy: typeof Template = Template.bind({});
PrivacyPolicy.args = privacyPolicyArgs;

const LayoutTemplate: Story<PropsWithChildren<PrivacyPolicyPureProps>> = (
  args
) => (
  <PureLayout social={{ gitHub: 'gitHubAccount' }} title="Gatsby Policy">
    <PurePrivacyPolicyComponent {...args} />
  </PureLayout>
);

export const PrivacyPolicyLayout: typeof LayoutTemplate = LayoutTemplate.bind(
  {}
);
PrivacyPolicyLayout.args = privacyPolicyArgs;
