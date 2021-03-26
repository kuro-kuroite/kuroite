import { graphql, PageProps } from 'gatsby';
import React, { VFC } from 'react';

import { Blog, Props as BlogProps } from '../components/Blog/Blog';
import { Layout } from '../components/Layout/Layout';
import { Props as SeoProps, Seo } from '../components/Layout/Seo/Seo';

const PureBlogPostTemplate: VFC<PureProps> = ({
  data,
  description,
  location,
  next,
  origin,
  previous,
  title,
}) => (
  <Layout>
    <Seo description={description} location={location} title={title} />
    <Blog data={data} next={next} origin={origin} previous={previous} />
  </Layout>
);

const BlogPostTemplate: VFC<
  PageProps<GatsbyTypes.BlogPostBySlugQuery, BlogPostContext>
> = ({ data, location, pageContext }) => {
  const post = data?.markdownRemark;
  const siteTitle = data?.site?.siteMetadata?.title;
  const siteUrl = data?.site?.siteMetadata?.siteUrl;
  const { next, previous } = pageContext;

  if (!siteTitle) {
    throw new Error('no title');
  }

  if (!post?.frontmatter?.title) {
    throw new Error('no title');
  }

  if (!siteUrl) {
    throw new Error('no siteUrl');
  }

  if (!post?.frontmatter?.description) {
    throw new Error('no description and excerpt');
  }

  return (
    <PureBlogPostTemplate
      data={data}
      description={post.frontmatter.description}
      location={location}
      next={next}
      origin={location?.origin || siteUrl}
      previous={previous}
      title={post.frontmatter.title}
    />
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160, format: PLAIN, truncate: true)
      html
      frontmatter {
        title
        createdAt(formatString: "MM/DD/YYYY")
        updatedAt(formatString: "MM/DD/YYYY")
        description
        tags
        userId
      }
      fields {
        slug
      }
      tableOfContents(absolute: false, maxDepth: 2)
    }
  }
`;

export type PureProps = Omit<
  Omit<Required<SeoProps>, 'meta' | 'image'> & BlogProps,
  ''
>;

type Previous = Required<
  NonNullable<GatsbyTypes.PagesQuery['posts']['edges'][number]['previous']>
>;

type Next = Required<
  NonNullable<GatsbyTypes.PagesQuery['posts']['edges'][number]['next']>
>;

export type BlogPostContext = {
  next?: {
    [P in keyof Next]: Next[P];
  };
  // NOTE: 最新または最初のblogの場合, undefinedとなるので, ?を追加
  previous?: {
    [P in keyof Previous]: Previous[P];
  };
};
