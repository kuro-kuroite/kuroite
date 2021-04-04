import { config } from 'dotenv';
import { GatsbyConfig } from 'gatsby';
import path from 'path';

import { colors } from './colors.config';

// FYI: https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/#google-analytics-env-var-example
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
console.log(`Using environment config: '${activeEnv}'`);
config({
  path: `.env.${activeEnv}`,
});

const title = process.env.SITE_TITLE ?? '';
const siteUrl = process.env.SITE_URL ?? '';
const gatsbyConfig: GatsbyConfig = {
  plugins: [
    {
      options: {
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
        trackingIds: [process.env.GA_TRACKING_ID],
      },
      resolve: 'gatsby-plugin-google-gtag',
    },
    'gatsby-plugin-postcss',
    {
      options: {
        outputPath: './typings/graphql-type/index.d.ts',
      },
      resolve: 'gatsby-plugin-typegen',
    },
    {
      options: {
        showSpinner: false,
      },
      resolve: `gatsby-plugin-nprogress`,
    },
    {
      options: {
        name: 'blog',
        path: path.resolve('./content/blog'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'about',
        path: path.resolve('./content/about'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'privacyPolicy',
        path: path.resolve('./content/privacy-policy'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'assets',
        path: path.resolve('./content/assets'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            options: {},
            resolve: 'gatsby-remark-code-titles',
          },
          {
            options: {
              className: 'headerAnchor',
              elements: ['h1', 'h2', 'h3'],
              maintainCase: false,
              // NOTE: ジャンプ時の上余白 (base.cssで設定: scroll-padding-top)
              offsetY: 80,
            },
            resolve: 'gatsby-remark-autolink-headers',
          },
          {
            options: {
              theme: 'dark-plus',
            },
            resolve: 'gatsby-remark-shiki',
          },
          {
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            options: {
              maxWidth: 590,
            },
            resolve: 'gatsby-remark-images',
          },
        ],
      },
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        feeds: [
          {
            output: '/rss.xml',
            // HACK: src/hack/gatsby-plugin-typegen/graphql-type-rss.tsのuseDummy()と対応
            query: `
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
            `,
            // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
            serialize: ({
              query: { allMarkdownRemark, site },
            }: {
              query: {
                allMarkdownRemark: GatsbyTypes.RssQuery['allMarkdownRemark'];
                site: GatsbyTypes.RssSiteQuery['site'];
              };
            }) => {
              return allMarkdownRemark.edges.map(({ node }) => {
                if (!site?.siteMetadata?.siteUrl) {
                  throw new Error('no siteUrl');
                }

                if (!node) {
                  throw new Error('no node');
                }

                if (!node?.html) {
                  throw new Error('no html');
                }

                if (!node?.fields?.slug) {
                  throw new Error('no slug');
                }

                if (!node?.frontmatter) {
                  throw new Error('no frontmatter');
                }

                if (!node?.frontmatter?.createdAt) {
                  throw new Error('no createdAt');
                }

                if (!node?.frontmatter?.description) {
                  throw new Error('no description');
                }

                if (!node?.frontmatter?.title) {
                  throw new Error('no title');
                }

                if (!node?.frontmatter?.updatedAt) {
                  throw new Error('no updatedAt');
                }

                return Object.assign({}, node.frontmatter, {
                  custom_elements: [{ 'content:encoded': node.html }],
                  date: node.frontmatter.createdAt,
                  description: node.frontmatter.description,
                  guid: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                  url: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                });
              });
            },
            title: `RSS Feed | ${title}`,
          },
        ],
        // HACK: src/hack/gatsby-plugin-typegen/graphql-type-rss-site.tsのuseDummy()と対応
        query: `
          query RssSite {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      },
      resolve: 'gatsby-plugin-feed',
    },
    {
      options: {
        background_color: colors.black[800],
        display: 'standalone',
        icon: path.resolve('./src/components/Layout/LogoLink/assets/logo.svg'),
        icon_options: {
          purpose: 'any maskable',
        },
        name: 'Starter',
        short_name: 'Starter',
        start_url: '/',
        theme_color: colors.orange.DEFAULT,
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      options: {
        siteUrl: siteUrl,
        stripQueryString: true,
      },
      resolve: 'gatsby-plugin-canonical-urls',
    },
  ],
  siteMetadata: {
    author: {
      name: process.env.SITE_AUTHOR_NAME,
      summary: process.env.SITE_AUTHOR_SUMMARY,
    },
    description: process.env.SITE_DESCRIPTION,
    siteUrl: siteUrl,
    social: {
      gitHub: process.env.ACCOUNT_GITHUB,
      twitter: process.env.ACCOUNT_TWITTER,
    },
    title: title,
  },
};

export default gatsbyConfig;
