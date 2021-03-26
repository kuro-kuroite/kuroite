import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { VFC } from 'react';
import { Helmet } from 'react-helmet';

import { selectLang, useSelector } from '../../../reducer/store';

export const PureSeo: VFC<PureProps> = ({
  description,
  image,
  lang,
  meta,
  siteTitle,
  socials: { twitter },
  title,
}) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    meta={[
      {
        content: description,
        name: `description`,
      },
      { content: image.slug, property: 'og:image' },
      {
        content: title,
        property: `og:title`,
      },
      {
        content: description,
        property: `og:description`,
      },
      {
        content: `website`,
        property: `og:type`,
      },
      {
        content: `summary`,
        name: `twitter:card`,
      },
      {
        content: twitter,
        name: `twitter:creator`,
      },
      {
        content: title,
        name: `twitter:title`,
      },
      {
        content: description,
        name: `twitter:description`,
      },
    ].concat(meta)}
    title={title}
    titleTemplate={`${title}${siteTitle !== '' ? ` | ${siteTitle}` : ''}`}
  />
);

export const Seo: VFC<Props> = ({
  description,
  meta = [],
  title,
  image = { slug: '/favicon.svg' },
  location,
}) => {
  const data = useStaticQuery<GatsbyTypes.SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          title
          siteUrl
          description
          social {
            twitter
          }
        }
      }
    }
  `);
  const lang = useSelector(selectLang);

  if (!data.site?.siteMetadata?.title) {
    throw new Error('no title');
  }

  if (!data.site?.siteMetadata?.siteUrl) {
    throw new Error('no siteUrl');
  }

  if (!description && !data.site?.siteMetadata?.description) {
    throw new Error('no description and meta description');
  }

  if (!data.site?.siteMetadata?.social?.twitter) {
    throw new Error('no twitter');
  }

  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = description || data.site.siteMetadata.description;
  const siteUrl = data.site.siteMetadata.siteUrl;

  // HACK: Type Guard. 本来はstring
  if (!siteDescription) {
    throw new Error('siteDescription: no description and meta description');
  }

  return (
    <PureSeo
      description={siteDescription}
      image={{
        slug: `${location?.origin || siteUrl}${image.slug}`,
      }}
      lang={lang}
      meta={meta}
      siteTitle={siteTitle}
      socials={{
        twitter: data.site.siteMetadata.social.twitter,
      }}
      title={title}
    />
  );
};

export type PureProps = Omit<
  Required<Omit<Props, 'location'>> & {
    lang: string;
    socials: {
      twitter: string;
    };
  } & {
      [P in 'siteTitle']: Props['title'];
    },
  ''
>;

export type Props = {
  description?: string;
  image?: {
    slug: string;
  };
  // HACK: location?.originを取得するため
  location: PageProps['location'];
  meta?: {
    [P in keyof MetaType]: MetaType[P];
  }[];
  title: string;
};

type MetaType = {
  content: string;
  name: string;
};
