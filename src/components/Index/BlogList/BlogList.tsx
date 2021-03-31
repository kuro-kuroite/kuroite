import React from 'react';

import { BlogItem, Props as BlogItemProps } from '../BlogItem/BlogItem';
import styles from './BlogList.module.css';

export const PureBlogList: React.VFC<PureProps> = ({ blogs }) => {
  return (
    <ul className={styles.List}>
      {blogs.map(({ createdAt, description, slug, tags, title, updatedAt }) => {
        return (
          <li key={title} className={styles.Item}>
            <BlogItem
              createdAt={createdAt}
              description={description}
              slug={slug}
              tags={tags}
              title={title}
              updatedAt={updatedAt}
            />
          </li>
        );
      })}
    </ul>
  );
};

export const BlogList: React.VFC<Props> = ({ blogs }) => {
  return <PureBlogList blogs={blogs} />;
};

export type PureProps = Props;

export type Props = {
  blogs: {
    [P in keyof BlogItemProps]: BlogItemProps[P];
  }[];
};
