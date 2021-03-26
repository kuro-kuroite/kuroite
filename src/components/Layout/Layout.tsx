import '@fontsource/caveat/latin-400.css';
// FYI: https://caniuse.com/?search=focus-visible
// NOTE: Safariが対応したとき、削除する
// import 'focus-visible';
import './tailwind.css';
import './reset.css';
import './a11y.css';
import './base.css';
// HACK: remark.css の読み込みを、base.css よりも後にするため
import '../Blog/remark.css';

import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';

import { Footer, Props as FooterProps } from './Footer/Footer';
import { Header, Props as HeaderProps } from './Header/Header';
import styles from './Layout.module.css';

export const PureLayout: FC<PureProps> = ({ children, social, title }) => (
  <>
    <div className={styles.Container}>
      <Header social={social} title={title} />
      <main>{children}</main>
      <Footer social={social} />
    </div>
  </>
);

export const Layout: FC<Props> = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          title
          social {
            gitHub
          }
        }
      }
    }
  `);

  if (!data.site?.siteMetadata?.title) {
    throw new Error('no title');
  }

  if (!data.site?.siteMetadata?.social?.gitHub) {
    throw new Error('no gitHub');
  }

  const siteTitle = data.site.siteMetadata.title;
  const social = {
    gitHub: data.site.siteMetadata.social.gitHub,
  };

  return (
    <PureLayout social={social} title={siteTitle}>
      {children}
    </PureLayout>
  );
};

type Social = Omit<HeaderProps['social'] & FooterProps['social'], ''>;

export type PureProps = Omit<
  Omit<HeaderProps, 'social'> &
    Omit<FooterProps, 'social'> & {
      social: {
        [P in keyof Social]: Social[P];
      };
    },
  'createdYear' | 'year'
>;

export type Props = Record<string, unknown>;
