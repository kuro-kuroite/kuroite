import React, { VFC } from 'react';
import { RiTwitterFill } from 'react-icons/ri';

import styles from './style.module.css';

export const PureIconLink: VFC<PureProps> = () => (
  <a
    aria-label="link to gatsby page"
    className={styles.link}
    href="https://www.gatsbyjs.com/"
    rel="nofollow noopener noreferrer"
    target="_blank"
  >
    <RiTwitterFill />
  </a>
);

export type PureProps = Record<string, unknown>;
