import '../Blog/remark.css';

import React, { VFC } from 'react';

import { ProgressBar } from '../Blog/ProgressBar/ProgressBar';
import { Props as TocProps, Toc } from '../Blog/Toc/Toc';
import { BlogInfo, Props as BlogInfoProps } from '../Index/BlogInfo/BlogInfo';
import styles from './About.module.css';
import { Footer, Props as FooterProps } from './Footer/Footer';

export const PureAbout: VFC<PureProps> = ({
  createdAt,
  html,
  tableOfContents,
  tags,
  title,
  updatedAt,
  url,
}) => (
  <article className={styles.About}>
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
    <Footer title={title} url={url} />
  </article>
);

export const About: VFC<Props> = ({ data, origin }) => {
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

  if (!data?.markdownRemark?.fields?.slug) {
    throw new Error('no slug');
  }

  if (!data?.markdownRemark?.tableOfContents) {
    throw new Error('no tableOfContents');
  }

  if (!origin) {
    throw new Error('no origin');
  }

  const createdAt = data.markdownRemark.frontmatter.createdAt;
  const tags = data.markdownRemark.frontmatter.tags.filter(
    (tag): tag is Exclude<typeof tag, undefined> => tag !== undefined
  );
  const title = data.markdownRemark.frontmatter.title;
  const updatedAt = data.markdownRemark.frontmatter.updatedAt;
  const html = data.markdownRemark.html;
  const slug = data.markdownRemark.fields.slug;
  const tableOfContents = data.markdownRemark.tableOfContents;

  return (
    <PureAbout
      createdAt={createdAt}
      html={html}
      tableOfContents={tableOfContents}
      tags={tags}
      title={title}
      updatedAt={updatedAt}
      url={`${origin}${slug}`}
    />
  );
};

export type PureProps = Omit<
  BlogInfoProps &
    TocProps &
    FooterProps & {
      html: string;
      title: string;
    },
  ''
>;

export type Props = {
  data: GatsbyTypes.AboutBySlugQuery;
  origin: string;
};
