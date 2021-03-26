import { Link } from 'gatsby';
import React, { VFC } from 'react';

import { useT } from '../../../utils/i18n';
import styles from './FooterInfo.module.css';

export const PureFooterInfo: VFC<PureProps> = ({ next, previous }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/blog/footerInfo');

  return (
    <div className={styles.FooterInfo}>
      <nav
        aria-label={t('ブログページナビゲーション')}
        className={styles.Pager}
      >
        <ul className={styles.PagerList}>
          <li>
            {previous?.slug && (
              <Link className={styles.PagerLink} rel="prev" to={previous.slug}>
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next?.slug && (
              <Link className={styles.PagerLink} rel="next" to={next.slug}>
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export const FooterInfo: VFC<Props> = ({ next, previous }) => {
  return <PureFooterInfo next={next} previous={previous} />;
};

export type PureProps = Props;

export type Props = {
  next?: {
    slug: string;
    title: string;
  };
  // NOTE: 最新または最初のblogの場合, undefinedとなるので, ?を追加
  previous?: {
    slug: string;
    title: string;
  };
};
