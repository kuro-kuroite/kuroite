module.exports = {
  plugins: [
    {
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        plugins: [
          {
            options: {
              maxWidth: 630,
            },
            resolve: `gatsby-remark-images`,
          },
          {
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
            resolve: `gatsby-remark-responsive-iframe`,
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
      resolve: `gatsby-plugin-google-analytics`,
    },
    `gatsby-plugin-feed`,
    {
      options: {
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        theme_color: `#663399`,
      },
      resolve: `gatsby-plugin-manifest`,
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `kylemathews`,
    },
    title: `Gatsby Starter Blog`,
  },
};
