import React, { VFC } from 'react';

import {
  PureItemInfo,
  PureProps as ItemInfoPureProps,
} from '../../blogs/item/info/ItemInfo';
import blogsItemStyles from '../../blogs/item/style.module.css';
import { PureBlogFooter } from '../footer/BlogFooter';
import {
  PureProgressItem,
  PureProps as ProgressItemPureProps,
} from '../progress/item/ProgressItem';
import {
  PureProps as TocItemPureProps,
  PureTocItem,
} from '../toc/item/TocItem';
import styles from './style.module.css';

export const PureBlogPage: VFC<PureProps> = ({
  createdAt,
  html,
  isWrap,
  onTocClick,
  progress,
  tableOfContents,
  tags,
  title,
  updatedAt,
}) => (
  <article className={blogsItemStyles.item}>
    <PureProgressItem progress={progress} />
    <h1 className={styles.title}>{title}</h1>
    <PureItemInfo createdAt={createdAt} tags={tags} updatedAt={updatedAt} />
    <div className={styles.container}>
      <PureTocItem
        isWrap={isWrap}
        onTocClick={onTocClick}
        tableOfContents={tableOfContents}
      />
      <section
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
    <PureBlogFooter />
  </article>
);

export type PureProps = Omit<
  ProgressItemPureProps &
    ItemInfoPureProps &
    TocItemPureProps & {
      html: string;
      title: string;
    },
  ''
>;
