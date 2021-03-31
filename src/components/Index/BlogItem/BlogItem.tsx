import { Link } from 'gatsby';
import { replace } from 'ramda';
import React from 'react';

import { useT } from '../../../utils/i18n';
import { BlogInfo, Props as BlogInfoProps } from '../BlogInfo/BlogInfo';
import styles from './BlogItem.module.css';

export const PureBlogItem: React.VFC<PureProps> = ({
  createdAt,
  description,
  slug,
  tags,
  title,
  updatedAt,
}) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/index/blogItem');

  return (
    <article>
      <Link
        aria-label={replace('{slug}', slug, t('{slug} へのリンク'))}
        className={styles.BlogLink}
        to={slug}
      >
        <h1 className={styles.Title}>{title}</h1>
        <p
          className={styles.Description}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </Link>
      <BlogInfo
        createdAt={createdAt}
        tags={tags}
        title={title}
        updatedAt={updatedAt}
      />
    </article>
  );
};

export const BlogItem: React.VFC<Props> = ({
  createdAt,
  description,
  slug,
  tags,
  title,
  updatedAt,
}) => {
  return (
    <PureBlogItem
      createdAt={createdAt}
      description={description}
      slug={slug}
      tags={tags}
      title={title}
      updatedAt={updatedAt}
    />
  );
};

export type PureProps = Props;

export type Props = Omit<
  BlogInfoProps & {
    description: string;
    slug: string;
    title: string;
  },
  ''
>;
