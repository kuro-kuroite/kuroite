/* eslint-disable @typescript-eslint/no-unused-vars */
import { graphql, useStaticQuery } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const useDummy = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const __rssSiteQueryForMakingRssSiteQueryOfType = useStaticQuery<GatsbyTypes.RssSiteQuery>(graphql`
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
  `);
};
