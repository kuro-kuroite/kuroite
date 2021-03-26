import React, { MouseEventHandler, VFC } from 'react';
import { MdFormatListBulleted } from 'react-icons/md';

import { useT } from '../../../utils/i18n';
import styles from './TocIcon.module.css';

export const PureTocIcon: VFC<PureProps> = ({ onTocIconClick }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/blog/tocIcon');

  return (
    <button
      aria-label={t('目次ボタン')}
      className={styles.TocIcon}
      onClick={onTocIconClick}
    >
      <MdFormatListBulleted />
    </button>
  );
};

export const TocIcon: VFC<Props> = ({ onTocIconClick }) => {
  return <PureTocIcon onTocIconClick={onTocIconClick} />;
};

export type PureProps = Props;

export type Props = {
  onTocIconClick: MouseEventHandler<HTMLButtonElement>;
};
