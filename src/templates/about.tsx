import { graphql, PageProps } from 'gatsby';
import React, { VFC } from 'react';

import { About, Props as AboutProps } from '../components/About/About';
import { Layout } from '../components/Layout/Layout';
import { Props as SeoProps, Seo } from '../components/Layout/Seo/Seo';

const PureAboutTemplate: VFC<PureProps> = ({
  data,
  description,
  location,
  origin,
  title,
}) => (
  <Layout>
    <Seo description={description} location={location} title={title} />
    <About data={data} origin={origin} />
  </Layout>
);

const AboutTemplate: VFC<PageProps<GatsbyTypes.AboutBySlugQuery>> = ({
  data,
  location,
}) => {
  const post = data?.markdownRemark;
  const siteTitle = data?.site?.siteMetadata?.title;
  const siteUrl = data?.site?.siteMetadata?.siteUrl;

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
    throw new Error('no description');
  }

  return (
    <PureAboutTemplate
      data={data}
      description={post.frontmatter.description}
      location={location}
      origin={location?.origin || siteUrl}
      title={post.frontmatter.title}
    />
  );
};

export default AboutTemplate;

export const pageQuery = graphql`
  query AboutBySlug($slug: String!) {
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
  Omit<Required<SeoProps>, 'meta' | 'image'> & AboutProps,
  ''
>;
