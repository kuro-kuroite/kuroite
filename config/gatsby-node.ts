import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { createPage } = actions;
  // HACK: src/hack/gatsby-plugin-typegen/graphql-type-pages.tsのuseDummy()と対応
  const result = await graphql<GatsbyTypes.PagesQuery>(`
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
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(result.errors);

    return;
  }

  // NOTE: for blogPost.tsx
  if (!result.data?.posts?.edges) {
    return;
  }

  const posts = result.data.posts.edges;
  const blogPostTemplate = path.resolve(`./src/templates/blogPost.tsx`);

  posts.forEach(({ next, node, previous }) => {
    if (!node.fields?.slug) {
      reporter.panicOnBuild('no slug');

      return;
    }

    createPage({
      component: blogPostTemplate,
      context: {
        // HACK: 最新順(DESC)を時系列順(ASC)に戻す
        next: previous,
        previous: next,
        slug: node.fields.slug,
      },
      path: node.fields.slug,
    });
  });
};

// FYI: https://qiita.com/AumyF/items/a6a8400cf9f5f2ce488f#configgatsby-nodets%E3%82%92%E6%9B%B8%E3%81%8F
export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  actions,
  getNode,
  node,
}) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ getNode, node });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
