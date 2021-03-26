import { Link } from 'gatsby';
import React, { VFC } from 'react';

import { useT } from '../../../utils/i18n';
import { I18nMode } from '../I18nMode/I18nMode';
import styles from './FooterNav.module.css';

export const PureFooterNav: VFC<PureProps> = () => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/layout/footerNav');

  return (
    <nav aria-label={t('フッタナビゲーション')} className={styles.Nav}>
      <ul className={styles.List}>
        <li>
          <Link className={styles.Link} to="/privacy-policy/">
            {t('プライバシーポリシー')}
          </Link>
        </li>
      </ul>
      <ul className={styles.List}>
        <li>
          <span className={styles.Link}>
            <I18nMode />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export const FooterNav: VFC<Props> = () => {
  return <PureFooterNav />;
};

export type PureProps = Props;

export type Props = Record<string, unknown>;
