import React, { VFC } from 'react';

import { PureTocButton } from '../../../../common/toc/button/TocButton';
import tocItemStyles from '../../../../common/toc/item/style.module.css';
import { PureProps as TocItemPureProps } from '../../../../common/toc/item/TocItem';
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
      className={isWrap ? tocItemStyles.wrappedBlind : tocItemStyles.blind}
      onClick={onTocClick}
    />
    <div className={tocItemStyles.container}>
      <h1 className={tocItemStyles.title}>Table of Contents</h1>
      <nav
        aria-label="Toc navigation"
        className={isWrap ? tocItemStyles.wrappedItem : tocItemStyles.item}
        dangerouslySetInnerHTML={{ __html: tableOfContents }}
      />
      <PureTocButton onTocClick={onTocClick} />
    </div>
  </nav>
);

export type PureProps = TocItemPureProps;
