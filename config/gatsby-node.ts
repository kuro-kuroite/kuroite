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
      privacyPolicy: markdownRemark(
        frontmatter: { status: { ne: "draft" } }
        fileAbsolutePath: { regex: "/content/privacy-policy/" }
      ) {
        fields {
          slug
        }
        frontmatter {
          title
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

  // NOTE: for about.tsx
  if (!result.data?.about) {
    return;
  }

  const about = result.data.about;
  const aboutTemplate = path.resolve(`./src/templates/about.tsx`);

  if (!about.fields?.slug) {
    reporter.panicOnBuild('no slug');

    return;
  }

  createPage({
    component: aboutTemplate,
    context: {
      slug: about.fields.slug,
    },
    path: about.fields.slug,
  });

  // NOTE: for tag.tsx
  if (!result.data?.posts?.tags) {
    return;
  }

  if (!result.data?.about?.frontmatter?.tags) {
    return;
  }

  const distinct = <T>(xs: T[]) => [...new Set(xs)];
  // FYI: tags of posts and aboutの重複を削除し、{ fieldValue: string }型にする
  const tags = distinct([
    ...result.data.posts.tags.map(({ fieldValue: tag }) => tag),
    ...result.data.about.frontmatter.tags,
  ]).map((tag) => ({
    fieldValue: tag,
  }));
  const tagTemplate = path.resolve(`./src/templates/tag.tsx`);

  tags.forEach(({ fieldValue: tag }) => {
    if (!tag) {
      reporter.panicOnBuild('no tag');

      return;
    }

    createPage({
      component: tagTemplate,
      context: {
        tag: tag,
      },
      path: `/tags/${tag}/`,
    });
  });

  // NOTE: for privacyPolicy.tsx
  if (!result.data?.privacyPolicy) {
    return;
  }

  const privacyPolicy = result.data.privacyPolicy;
  const privacyPolicyTemplate = path.resolve(
    `./src/templates/privacyPolicy.tsx`
  );

  if (!privacyPolicy.fields?.slug) {
    reporter.panicOnBuild('no slug');

    return;
  }

  createPage({
    component: privacyPolicyTemplate,
    context: {
      slug: privacyPolicy.fields.slug,
    },
    path: privacyPolicy.fields.slug,
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
