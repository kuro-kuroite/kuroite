import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import { withPseudo } from 'storybook-addon-pseudo-states-react';

import {
  PureHatenaBookmarkLink as PureHatenaBookmarkLinkComponent,
  PureProps as HatenaBookmarkLinkPureProps,
} from './HatenaBookmarkLink';

export default {
  component: PureHatenaBookmarkLinkComponent,
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      attributes: ['disabled', 'readonly', 'error'],
      selector: ['a'],
    },
  },
  title: 'components/Blog/HatenaBookmarkLink',
} as Meta;

const Template: Story<PropsWithChildren<HatenaBookmarkLinkPureProps>> = (
  args
) => <PureHatenaBookmarkLinkComponent {...args} />;

export const HatenaBookmarkLink = Template.bind({});
HatenaBookmarkLink.args = {
  title: 'About',
  url: 'http://localhost:6006/about/',
};
