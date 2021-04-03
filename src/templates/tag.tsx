import { graphql, PageProps } from 'gatsby';
import React, { VFC } from 'react';

import { Layout } from '../components/Layout/Layout';
import { Props as SeoProps, Seo } from '../components/Layout/Seo/Seo';
import { Props as TagProps, Tag } from '../components/Tag/Tag';

const PureTagTemplate: VFC<PureProps> = ({
  data,
  description,
  location,
  tag,
  title,
}) => (
  <Layout>
    <Seo description={description} location={location} title={title} />
    <Tag data={data} tag={tag} />
  </Layout>
);

const TagTemplate: VFC<PageProps<GatsbyTypes.TagByTagQuery, TagContext>> = ({
  data,
  location,
  pageContext,
}) => {
  const { tag } = pageContext;

  if (!tag) {
    throw new Error('no tag');
  }

  return (
    <PureTagTemplate
      data={data}
      description={`${tag} blog list page`}
      location={location}
      tag={tag}
      title={tag}
    />
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagByTag($tag: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { tags: { in: [$tag] }, status: { ne: "draft" } }
        fileAbsolutePath: { regex: "/content/(blog|about)/" }
      }
      sort: {
        order: DESC
        fields: [frontmatter___createdAt, frontmatter___updatedAt]
      }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 160, format: PLAIN, truncate: true)
          frontmatter {
            title
            createdAt(formatString: "MM/DD/YYYY")
            updatedAt(formatString: "MM/DD/YYYY")
            description
            category
            tags
          }
        }
      }
    }
  }
`;

export type PureProps = Omit<
  Omit<Required<SeoProps>, 'meta' | 'image'> & TagProps,
  ''
>;

export type TagContext = {
  [P in 'tag']: NonNullable<
    GatsbyTypes.PagesQuery['posts']['tags'][number]['fieldValue']
  >;
};
