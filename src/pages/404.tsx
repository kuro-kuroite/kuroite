import { PageProps } from 'gatsby';
import React, { VFC } from 'react';

import { Layout } from '../components/Layout/Layout';
import { Props as SeoProps, Seo } from '../components/Layout/Seo/Seo';
import { NotFound } from '../components/NotFound/NotFound';
import { useT } from '../utils/i18n';

const PureNotFoundPage: VFC<PureProps> = ({ location }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/notFound');

  return (
    <Layout>
      <Seo
        description={t('このページは存在しません')}
        location={location}
        title={`404: ${t('Not Found')}`}
      />
      <NotFound />
    </Layout>
  );
};

const NotFoundPage: VFC<PageProps> = ({ location }) => {
  return <PureNotFoundPage location={location} />;
};

export default NotFoundPage;

export type PureProps = Omit<SeoProps, 'title' | 'description'>;
