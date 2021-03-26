import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  VFC,
} from 'react';

import { useT } from '../../../utils/i18n';
import { Props as TocIconProps, TocIcon } from '../TocIcon/TocIcon';
import styles from './Toc.module.css';

export const PureToc: VFC<PureProps> = ({
  isWrap,
  onTocIconClick,
  tableOfContents,
}) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/blog/toc');

  return (
    <nav aria-label={t('目次コンテナ')} className={styles.WrappedNav}>
      <button
        aria-label={t('目次を隠す')}
        className={isWrap ? styles.WrappedBlind : styles.Blind}
        onClick={onTocIconClick}
      />
      <div className={styles.Container}>
        <h1 className={styles.Title}>{t('目次')}</h1>
        <nav
          aria-label={t('目次ナビゲーション')}
          className={isWrap ? styles.WrappedToc : styles.Toc}
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
        <TocIcon onTocIconClick={onTocIconClick} />
      </div>
    </nav>
  );
};

// HACK: [boolean, Dispatch<SetStateAction<boolean>>]
export const useTocWrap = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isWrap, setIsWrap] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => setIsWrap(false);

    window.addEventListener('hashchange', handleHashChange, false);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  });

  return [isWrap, setIsWrap];
};

export const Toc: VFC<Props> = ({ tableOfContents }) => {
  const [isWrap, setIsWrap] = useTocWrap();
  const handleTocIconClick: PureProps['onTocIconClick'] = useCallback(
    (event) => {
      event.preventDefault();

      setIsWrap((isWrap) => !isWrap);
    },
    [setIsWrap]
  );

  return (
    <PureToc
      isWrap={isWrap}
      onTocIconClick={handleTocIconClick}
      tableOfContents={tableOfContents}
    />
  );
};

export type PureProps = Omit<
  Props &
    TocIconProps & {
      isWrap: boolean;
    },
  ''
>;

export type Props = {
  tableOfContents: string;
};
