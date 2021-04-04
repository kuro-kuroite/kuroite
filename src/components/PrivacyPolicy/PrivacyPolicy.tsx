import '../Blog/remark.css';

import React, { VFC } from 'react';

import { ProgressBar } from '../Blog/ProgressBar/ProgressBar';
import { Props as TocProps, Toc } from '../Blog/Toc/Toc';
import { BlogInfo, Props as BlogInfoProps } from '../Index/BlogInfo/BlogInfo';
import styles from './PrivacyPolicy.module.css';

export const PurePrivacyPolicy: VFC<PureProps> = ({
  createdAt,
  html,
  tableOfContents,
  tags,
  title,
  updatedAt,
}) => (
  <article className={styles.PrivacyPolicy}>
    <ProgressBar />
    <h1 className={styles.Title}>{title}</h1>
    <BlogInfo
      createdAt={createdAt}
      tags={tags}
      title={title}
      updatedAt={updatedAt}
    />
    <div className={styles.Container}>
      <Toc tableOfContents={tableOfContents} />
      <section
        className={styles.Body}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </article>
);

export const PrivacyPolicy: VFC<Props> = ({ data }) => {
  if (!data) {
    throw new Error('no blog data');
  }

  if (!data?.markdownRemark?.frontmatter?.createdAt) {
    throw new Error('no created date');
  }

  if (!data?.markdownRemark?.frontmatter?.tags) {
    throw new Error('no tags');
  }

  if (!data?.markdownRemark?.html) {
    throw new Error('no content');
  }

  if (!data?.markdownRemark?.frontmatter?.title) {
    throw new Error('no title');
  }

  if (!data?.markdownRemark?.frontmatter?.updatedAt) {
    throw new Error('no updated date');
  }

  if (!data?.markdownRemark?.tableOfContents) {
    throw new Error('no tableOfContents');
  }

  const createdAt = data.markdownRemark.frontmatter.createdAt;
  const tags = data.markdownRemark.frontmatter.tags.filter(
    (tag): tag is Exclude<typeof tag, undefined> => tag !== undefined
  );
  const title = data.markdownRemark.frontmatter.title;
  const updatedAt = data.markdownRemark.frontmatter.updatedAt;
  const html = data.markdownRemark.html;
  const tableOfContents = data.markdownRemark.tableOfContents;

  return (
    <PurePrivacyPolicy
      createdAt={createdAt}
      html={html}
      tableOfContents={tableOfContents}
      tags={tags}
      title={title}
      updatedAt={updatedAt}
    />
  );
};

export type PureProps = Omit<
  BlogInfoProps &
    Omit<TocProps, 'className'> & {
      html: string;
      title: string;
    },
  ''
>;

export type Props = {
  data: GatsbyTypes.PrivacyPolicyBySlugQuery;
};
