import { graphql, useStaticQuery } from 'gatsby';
import React, { VFC } from 'react';

import { BlogList, Props as BlogListProps } from './BlogList/BlogList';

export const PureIndex: VFC<PureProps> = ({ blogs }) => (
  <BlogList blogs={blogs} />
);

export const Index: VFC<Props> = () => {
  const data = useStaticQuery<GatsbyTypes.BlogListQuery>(graphql`
    query BlogList {
      allMarkdownRemark(
        sort: {
          fields: [frontmatter___createdAt, frontmatter___updatedAt]
          order: DESC
        }
        filter: {
          frontmatter: { status: { ne: "draft" } }
          fileAbsolutePath: { regex: "/content/blog/" }
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
  `);

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

  return <PureIndex blogs={blogs} />;
};

export type PureProps = BlogListProps;

export type Props = Record<string, unknown>;
