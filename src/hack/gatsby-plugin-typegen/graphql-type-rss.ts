/* eslint-disable @typescript-eslint/no-unused-vars */
import { graphql, useStaticQuery } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const useDummy = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const __rssQueryForMakingRssQueryOfType = useStaticQuery<GatsbyTypes.RssQuery>(graphql`
    query Rss {
      allMarkdownRemark(
        sort: {
          order: DESC
          fields: [frontmatter___createdAt, frontmatter___updatedAt]
        }
        filter: {
          fileAbsolutePath: { glob: "**/content/blog/**/*.md" }
          frontmatter: { status: { ne: "draft" } }
        }
        limit: 1000
      ) {
        edges {
          node {
            excerpt
            html
            fields {
              slug
            }
            frontmatter {
              title
              updatedAt
              createdAt
              description
            }
          }
        }
      }
    }
  `);
};
