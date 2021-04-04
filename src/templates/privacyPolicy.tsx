import { graphql, PageProps } from 'gatsby';
import React, { VFC } from 'react';

import { Layout } from '../components/Layout/Layout';
import { Props as SeoProps, Seo } from '../components/Layout/Seo/Seo';
import {
  PrivacyPolicy,
  Props as PrivacyPolicyProps,
} from '../components/PrivacyPolicy/PrivacyPolicy';

const PurePrivacyPolicyTemplate: VFC<PureProps> = ({
  data,
  description,
  location,
  title,
}) => (
  <Layout>
    <Seo description={description} location={location} title={title} />
    <PrivacyPolicy data={data} />
  </Layout>
);

const PrivacyPolicyTemplate: VFC<
  PageProps<GatsbyTypes.PrivacyPolicyBySlugQuery>
> = ({ data, location }) => {
  const post = data?.markdownRemark;
  const siteTitle = data?.site?.siteMetadata?.title;

  if (!siteTitle) {
    throw new Error('no title');
  }

  if (!post?.frontmatter?.title) {
    throw new Error('no title');
  }

  if (!post?.frontmatter?.description) {
    throw new Error('no description and excerpt');
  }

  return (
    <PurePrivacyPolicyTemplate
      data={data}
      description={post.frontmatter.description}
      location={location}
      title={post.frontmatter.title}
    />
  );
};

export default PrivacyPolicyTemplate;

export const pageQuery = graphql`
  query PrivacyPolicyBySlug($slug: String!) {
    site {
      siteMetadata {
        title
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
      tableOfContents(absolute: false, maxDepth: 2)
    }
  }
`;

export type PureProps = Omit<
  Omit<Required<SeoProps>, 'meta' | 'image'> & PrivacyPolicyProps,
  ''
>;
