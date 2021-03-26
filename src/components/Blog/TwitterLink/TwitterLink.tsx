import React, { VFC } from 'react';
import { RiTwitterFill } from 'react-icons/ri';

import { useT } from '../../../utils/i18n';
import styles from './TwitterLink.module.css';

export const PureTwitterLink: VFC<PureProps> = ({ title, url }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/blog/twitterLink');

  return (
    <a
      aria-label={t('Twitterで共有する')}
      className={styles.TwitterLink}
      href={`https://twitter.com/intent/tweet?text=${title}%0a${url}`}
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      <RiTwitterFill />
    </a>
  );
};

export const TwitterLink: VFC<Props> = ({ title, url }) => {
  return <PureTwitterLink title={title} url={url} />;
};

export type PureProps = Props;

export type Props = {
  title: string;
  url: string;
};
