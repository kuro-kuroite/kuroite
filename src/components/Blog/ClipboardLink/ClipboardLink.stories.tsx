import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import { withPseudo } from 'storybook-addon-pseudo-states-react';

import {
  PureClipboardLink as PureClipboardLinkComponent,
  PureProps as ClipboardLinkPureProps,
} from './ClipboardLink';

export default {
  component: PureClipboardLinkComponent,
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      attributes: ['disabled', 'readonly', 'error'],
      selector: ['span'],
    },
  },
  title: 'components/Blog/ClipboardLink',
} as Meta;

const Template: Story<PropsWithChildren<ClipboardLinkPureProps>> = (args) => (
  <PureClipboardLinkComponent {...args} />
);

export const ClipboardLink = Template.bind({});
ClipboardLink.args = {
  url: 'http://localhost:6006/about/',
};
