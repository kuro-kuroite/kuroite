import React, { VFC } from 'react';

import { useT } from '../../../utils/i18n';
import {
  ClipboardLink,
  Props as ClipboardLinkProps,
} from '../ClipboardLink/ClipboardLink';
import { FooterInfo, Props as FooterInfoProps } from '../FooterInfo/FooterInfo';
import {
  HatenaBookmarkLink,
  Props as HatenaBookmarkLinkProps,
} from '../HatenaBookmarkLink/HatenaBookmarkLink';
import {
  Props as TwitterLinkProps,
  TwitterLink,
} from '../TwitterLink/TwitterLink';
import styles from './Footer.module.css';

export const PureFooter: VFC<PureProps> = ({ next, previous, title, url }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/blog/footer');

  return (
    <div className={styles.Footer}>
      <nav aria-label={t('ブログフッタナビゲーション')} className={styles.Nav}>
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
      <FooterInfo next={next} previous={previous} />
    </div>
  );
};

export const Footer: VFC<Props> = ({ next, previous, title, url }) => {
  return <PureFooter next={next} previous={previous} title={title} url={url} />;
};

export type PureProps = Props;

export type Props = Omit<
  TwitterLinkProps &
    HatenaBookmarkLinkProps &
    ClipboardLinkProps &
    FooterInfoProps,
  ''
>;
