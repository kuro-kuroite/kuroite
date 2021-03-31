import { PageProps } from 'gatsby';
import React, { VFC } from 'react';

import { Index } from '../components/Index/Index';
import { Layout } from '../components/Layout/Layout';
import { Props as SeoProps, Seo } from '../components/Layout/Seo/Seo';
import { useT } from '../utils/i18n';

const PureIndexPage: VFC<PureProps> = ({ location }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/index');

  return (
    <Layout>
      <Seo
        description={t('記事一覧')}
        location={location}
        title={t('TOPページ')}
      />
      <Index />
    </Layout>
  );
};

const IndexPage: VFC<PageProps> = ({ location }) => {
  return <PureIndexPage location={location} />;
};

export default IndexPage;

export type PureProps = Omit<SeoProps, 'title' | 'description'>;
