import React, { VFC } from 'react';

import { useT } from '../../../utils/i18n';
import {
  ClipboardLink,
  Props as ClipboardLinkProps,
} from '../../Blog/ClipboardLink/ClipboardLink';
import {
  HatenaBookmarkLink,
  Props as HatenaBookmarkLinkProps,
} from '../../Blog/HatenaBookmarkLink/HatenaBookmarkLink';
import {
  Props as TwitterLinkProps,
  TwitterLink,
} from '../../Blog/TwitterLink/TwitterLink';
import styles from './Footer.module.css';

export const PureFooter: VFC<PureProps> = ({ title, url }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/about/footer');

  return (
    <div className={styles.Footer}>
      <nav aria-label={t('About フッタナビゲーション')} className={styles.Nav}>
        <ul className={styles.NavList}>
          <li>
            <ul className={styles.NavList}>
              <li>
                <TwitterLink title={title} url={url} />
              </li>
              <li>
                <HatenaBookmarkLink title={title} url={url} />
              </li>
              <li>
                <ClipboardLink url={url} />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export const Footer: VFC<Props> = ({ title, url }) => {
  return <PureFooter title={title} url={url} />;
};

export type PureProps = Props;

export type Props = Omit<
  TwitterLinkProps & HatenaBookmarkLinkProps & ClipboardLinkProps,
  ''
>;
