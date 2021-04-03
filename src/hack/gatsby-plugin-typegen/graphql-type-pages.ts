/* eslint-disable @typescript-eslint/no-unused-vars */
import { graphql, useStaticQuery } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const useDummy = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const __pagesQueryForMakingRssSiteQueryOfType = useStaticQuery<GatsbyTypes.PagesQuery>(graphql`
    query Pages {
      posts: allMarkdownRemark(
        filter: {
          frontmatter: { status: { ne: "draft" } }
          fileAbsolutePath: { regex: "/content/blog/" }
        }
        sort: {
          order: DESC
          fields: [frontmatter___createdAt, frontmatter___updatedAt]
        }
        limit: 1000
      ) {
        edges {
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
        tags: group(field: frontmatter___tags) {
          fieldValue
        }
      }
      about: markdownRemark(
        frontmatter: { status: { ne: "draft" } }
        fileAbsolutePath: { regex: "/content/about/" }
      ) {
        fields {
          slug
        }
        frontmatter {
          tags
          title
        }
      }
    }
  `);
};
