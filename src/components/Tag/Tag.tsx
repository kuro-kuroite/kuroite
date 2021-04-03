import React, { VFC } from 'react';

import { useT } from '../../utils/i18n';
import { BlogList, Props as BlogListProps } from '../Index/BlogList/BlogList';
import styles from './Tag.module.css';

export const PureTag: VFC<PureProps> = ({ blogs, tag }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/tag');

  return (
    <>
      <h1 className={styles.Title}>
        {t('タグ')}: {tag}
      </h1>
      <BlogList blogs={blogs} />
    </>
  );
};

export const Tag: VFC<Props> = ({ data, tag }) => {
  if (!data) {
    throw new Error('no blog list data');
  }

  const posts = data?.allMarkdownRemark?.edges;
  const blogs: PureProps['blogs'] = posts.map(({ node }) => {
    if (!node.frontmatter?.createdAt) {
      throw new Error('no created date');
    }

    // NOTE: description または excerptのどちらかがstringであるのに，
    //        blogs.descriptionの型推論がstring | undefined???
    if (
      !node.frontmatter?.description
      //  && !node.excerpt
    ) {
      throw new Error('no description // and excerpt');
    }

    if (!node.fields?.slug) {
      throw new Error('no slug');
    }

    if (!node.frontmatter?.title) {
      throw new Error('no title');
    }

    if (
      !node.frontmatter?.tags ||
      node.frontmatter.tags.some((tag) => tag === undefined)
    ) {
      throw new Error('no tags');
    }

    if (!node.frontmatter?.updatedAt) {
      throw new Error('no updated date');
    }

    return {
      createdAt: node.frontmatter.createdAt,
      description: node.frontmatter.description ?? node.excerpt,
      slug: node.fields.slug,
      // HACK: undefined[]を除外
      tags: node.frontmatter.tags.filter(
        (tag): tag is NonNullable<typeof tag> => tag !== undefined
      ),
      title: node.frontmatter.title,
      updatedAt: node.frontmatter.updatedAt,
    };
  });

  return <PureTag blogs={blogs} tag={tag} />;
};

export type PureProps = Omit<Omit<Props, 'data'> & BlogListProps, ''>;

export type Props = Omit<
  {
    data: GatsbyTypes.TagByTagQuery;
  } & {
    tag: string;
  },
  ''
>;
