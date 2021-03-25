import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import { withPseudo } from 'storybook-addon-pseudo-states-react';

import {
  PureProps as TagLinkPureProps,
  PureTagLink as PureTagLinkComponent,
} from './TagLink';

export default {
  component: PureTagLinkComponent,
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      attributes: ['disabled', 'readonly', 'error'],
      selector: ['a'],
    },
  },

  title: 'css/common/tag/link',
} as Meta;

const Template: Story<PropsWithChildren<TagLinkPureProps>> = (args) => (
  <PureTagLinkComponent {...args} />
);

export const TagLink = Template.bind({});
TagLink.args = {
  tag: 'React',
};
