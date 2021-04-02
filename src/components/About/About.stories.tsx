import { Meta, Story } from '@storybook/react/types-6-0';
import React, { PropsWithChildren } from 'react';

import { PureLayout } from '../Layout/Layout';
import {
  PureAbout as PureAboutComponent,
  PureProps as AboutPureProps,
} from './About';

export default {
  component: PureAboutComponent,
  title: 'components/About',
} as Meta;

const Template: Story<PropsWithChildren<AboutPureProps>> = (args) => (
  // HACK: All page content must be contained by landmarks
  <main>
    <PureAboutComponent {...args} />
  </main>
);
const aboutArgs: PropsWithChildren<AboutPureProps> = {
  createdAt: '08/22/2020',
  html: '<div><h1>title</h1><p>hello world</p></div>',
  tableOfContents:
    '<ul><li><p><a href="/blog/hello-world/#h1-1">h1-1</a></p><ul><li><a href="/blog/hello-world/#h2-1">h2-1</a></li><li><a href="/blog/hello-world/#h2-2">h2-2</a></li><li><a href="/blog/hello-world/#h2-3">h2-3</a></li></ul></li><li><p><a href="/blog/hello-world/#h1-2">h1 2</a></p><ul><li><a href="/blog/hello-world/#h2">h2</a></li></ul></li></ul>',
  tags: ['React', 'TypeScript'],
  title: 'About',
  updatedAt: '08/24/2020',
  url: 'http://localhost:6006/',
};

export const About: typeof Template = Template.bind({});
About.args = aboutArgs;

const LayoutTemplate: Story<PropsWithChildren<AboutPureProps>> = (args) => (
  <PureLayout social={{ gitHub: 'gitHubAccount' }} title="Gatsby About">
    <PureAboutComponent {...args} />
  </PureLayout>
);

export const AboutLayout: typeof LayoutTemplate = LayoutTemplate.bind({});
AboutLayout.args = aboutArgs;
