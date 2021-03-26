import React, { VFC } from 'react';

import {
  PureBlogsItem,
  PureProps as PureBlogsItemProps,
} from '../item/BlogsItem';
import styles from './style.module.css';

export const PureBlogsList: VFC<PureProps> = ({ blogs }) => (
  <ul className={styles.list}>
    {blogs.map(({ description, slug, title }) => {
      return (
        <li key={title} className={styles.item}>
          <PureBlogsItem description={description} slug={slug} title={title} />
        </li>
      );
    })}
  </ul>
);

export type PureProps = {
  blogs: {
    [P in keyof PureBlogsItemProps]: PureBlogsItemProps[P];
  }[];
};
