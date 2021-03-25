import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import { withPseudo } from 'storybook-addon-pseudo-states-react';

import {
  PureProps as TwitterLinkPureProps,
  PureTwitterLink as PureTwitterLinkComponent,
} from './TwitterLink';

export default {
  component: PureTwitterLinkComponent,
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      attributes: ['disabled', 'readonly', 'error'],
      selector: ['a'],
    },
  },
  title: 'components/Blog/TwitterLink',
} as Meta;

const Template: Story<PropsWithChildren<TwitterLinkPureProps>> = (args) => (
  <PureTwitterLinkComponent {...args} />
);

export const TwitterLink = Template.bind({});
TwitterLink.args = {
  title: 'About',
  url: 'http://localhost:6006/about/',
};
