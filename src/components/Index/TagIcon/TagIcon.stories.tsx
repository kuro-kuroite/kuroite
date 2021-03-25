import type { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import { withPseudo } from 'storybook-addon-pseudo-states-react';

import {
  PureProps as TagIconPureProps,
  PureTagIcon as PureTagIconComponent,
} from './TagIcon';

export default {
  component: PureTagIconComponent,
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      attributes: ['disabled', 'readonly', 'error'],
      selector: ['a'],
    },
  },
  title: 'components/Index/TagIcon',
} as Meta;

const Template: Story<PropsWithChildren<TagIconPureProps>> = (args) => (
  <PureTagIconComponent {...args} />
);

export const TagIcon = Template.bind({});
TagIcon.args = {
  tag: 'React',
};
