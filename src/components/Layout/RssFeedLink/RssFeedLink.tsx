import React, { VFC } from 'react';
import { MdRssFeed } from 'react-icons/md';

import { useT } from '../../../utils/i18n';
import styles from './RssFeedLink.module.css';

export const PureRssFeedLink: VFC<PureProps> = () => {
  const t = useT('components/layout/rssFeedLink');

  return (
    <a aria-label={t('RSSフィード')} className={styles.Link} href="/rss.xml">
      <MdRssFeed />
    </a>
  );
};

export const RssFeedLink: VFC<Props> = () => {
  return <PureRssFeedLink />;
};

export type PureProps = Props;

export type Props = Record<string, unknown>;
