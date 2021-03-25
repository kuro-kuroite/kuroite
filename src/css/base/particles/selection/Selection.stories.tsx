import type { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';

import styles from './style.module.css';

export default {
  title: 'css/base/particles/selection',
} as Meta;

const Template: Story<HTMLAttributes<HTMLDivElement>> = () => (
  <div className={styles.selection}>
    <div>
      apply the selection style to the document you select when you drag it.
    </div>
  </div>
);

export const Selection = Template.bind({});
Selection.args = {};
