import React, { VFC } from 'react';

import {
  PureProps as TocButtonPureProps,
  PureTocButton,
} from '../button/TocButton';
import styles from './style.module.css';

export const PureTocItem: VFC<PureProps> = ({
  isWrap,
  onTocClick,
  tableOfContents,
}) => (
  // FYI: All page content must be contained by landmarks
  <nav aria-label="Toc container" className={styles.wrappedNav}>
    <button
      aria-label="hide the Toc"
      className={isWrap ? styles.wrappedBlind : styles.blind}
      onClick={onTocClick}
    />
    <div className={styles.container}>
      <h1 className={styles.title}>Table of Contents</h1>
      <nav
        aria-label="Toc navigation"
        className={isWrap ? styles.wrappedItem : styles.item}
        dangerouslySetInnerHTML={{ __html: tableOfContents }}
      />
      <PureTocButton onTocClick={onTocClick} />
    </div>
  </nav>
);

export type PureProps = Omit<
  TocButtonPureProps & {
    isWrap: boolean;
    tableOfContents: string;
  },
  ''
>;
