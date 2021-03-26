import React, { VFC } from 'react';
import { SiHatenabookmark } from 'react-icons/si';

import { useT } from '../../../utils/i18n';
import styles from './HatenaBookmarkLink.module.css';

export const PureHatenaBookmarkLink: VFC<PureProps> = ({ title, url }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/blog/hatenaBookmarkLink');

  return (
    <a
      aria-label={t('Hatenaブックマークで共有する')}
      className={styles.HatenaBookmarkLink}
      href={`http://b.hatena.ne.jp/add?mode=confirm&title=${title}&url=${url}`}
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      {/* FYI: https://dequeuniversity.com/rules/axe/3.5/svg-img-alt?application=axeAPI */}
      <SiHatenabookmark aria-label="Hatena Bookmark Icon" />
    </a>
  );
};

export const HatenaBookmarkLink: VFC<Props> = ({ title, url }) => {
  return <PureHatenaBookmarkLink title={title} url={url} />;
};

export type PureProps = Props;

export type Props = {
  title: string;
  url: string;
};
