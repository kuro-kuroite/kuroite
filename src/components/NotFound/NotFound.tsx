import { Link } from 'gatsby';
import React, { VFC } from 'react';

import { useT } from '../../utils/i18n';
import styles from './NotFound.module.css';

export const PureNotFound: VFC<PureProps> = () => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/notFound');

  return (
    <section>
      <h1 className={styles.Title}>404: {t('Not Found')}</h1>
      <p className={styles.Description}>{t('このページは存在しません')}</p>
      <Link className={styles.Link} to={'/'}>
        ← {t('Topページに戻る')}
      </Link>
    </section>
  );
};

export const NotFound: VFC<Props> = () => {
  return <PureNotFound />;
};

export type PureProps = Record<string, unknown>;

export type Props = Record<string, unknown>;
