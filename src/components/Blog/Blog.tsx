// HACK: remark.css の読み込みを、base.css よりも後にするため, Layout.tsx に移動
// import './remark.css';

import React, { VFC } from 'react';

import { BlogPostContext } from '../../templates/blogPost';
import { BlogInfo, Props as BlogInfoProps } from '../Index/BlogInfo/BlogInfo';
import styles from './Blog.module.css';
import { Footer, Props as FooterProps } from './Footer/Footer';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { Props as TocProps, Toc } from './Toc/Toc';

export const PureBlog: VFC<PureProps> = ({
  createdAt,
  html,
  next,
  previous,
  tableOfContents,
  tags,
  title,
  updatedAt,
  url,
}) => (
  <article className={styles.Blog}>
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
    <Footer next={next} previous={previous} title={title} url={url} />
  </article>
);

export const Blog: VFC<Props> = ({ data, next, origin, previous }) => {
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
  const pure_previous = {
    slug: previous?.fields?.slug as string,
    title: previous?.frontmatter?.title as string,
  };
  const pure_next = {
    slug: next?.fields?.slug as string,
    title: next?.frontmatter?.title as string,
  };

  return (
    <PureBlog
      createdAt={createdAt}
      html={html}
      next={pure_next}
      previous={pure_previous}
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

export type Props = Omit<
  BlogPostContext & {
    data: GatsbyTypes.BlogPostBySlugQuery;
    origin: string;
  },
  ''
>;
