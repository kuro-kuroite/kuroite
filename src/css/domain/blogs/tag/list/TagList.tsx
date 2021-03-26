import React, { VFC } from 'react';
import { FaTag } from 'react-icons/fa';

import { PureTagLink } from '../../../../common/tag/link/TagLink';
import tagListStyles from '../../../../common/tag/list/style.module.css';
import { PureProps as TagListPureProps } from '../../../../common/tag/list/TagList';
import styles from './style.module.css';

export const PureTagList: VFC<PureProps> = ({ tags }) => (
  // FYI: All page content must be contained by landmarks
  <nav aria-label="tag navigation" className={styles.list}>
    <FaTag className={tagListStyles.icon} />
    <ul className={tagListStyles.linkList}>
      {tags.map((tag) => {
        return (
          <li key={tag}>
            <PureTagLink tag={tag} />
          </li>
        );
      })}
    </ul>
  </nav>
);

export type PureProps = TagListPureProps;
