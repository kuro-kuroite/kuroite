import React, { VFC } from 'react';
import { FaTag } from 'react-icons/fa';

import { PureProps as TagPureProps, PureTagLink } from '../link/TagLink';
import styles from './style.module.css';

export const PureTagList: VFC<PureProps> = ({ tags }) => (
  // FYI: All page content must be contained by landmarks
  <nav aria-label="tag navigation" className={styles.list}>
    <FaTag className={styles.icon} />
    <ul className={styles.linkList}>
      {tags.map((tag) => (
        <li key={tag}>
          <PureTagLink tag={tag} />
        </li>
      ))}
    </ul>
  </nav>
);

export type PureProps = {
  tags: {
    [P in 'tag']: TagPureProps[P];
  }['tag'][];
};
