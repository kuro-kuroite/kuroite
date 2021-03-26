import React, { VFC } from 'react';

import styles from './style.module.css';

export const PureTagLink: VFC<PureProps> = ({ tag }) => (
  <a className={styles.iconLink} href={`/tags/${tag}/`}>
    {tag}
  </a>
);

export type PureProps = {
  tag: string;
};
