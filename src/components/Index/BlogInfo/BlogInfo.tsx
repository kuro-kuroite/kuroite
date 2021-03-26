import React, { VFC } from 'react';

import { useT } from '../../../utils/i18n';
import { CreatedAt, Props as CreatedAtProps } from '../CreatedAt/CreatedAt';
import {
  Props as TagIconListProps,
  TagIconList,
} from '../TagIconList/TagIconList';
import { Props as UpdatedAtProps, UpdatedAt } from '../UpdatedAt/UpdatedAt';
import styles from './BlogInfo.module.css';

export const PureBlogInfo: VFC<PureProps> = ({
  createdAt,
  tags,
  title,
  updatedAt,
}) => {
  const t = useT('components/index/blogInfo');

  return (
    <small aria-label={t('ブログ info')} className={styles.BlogInfo}>
      <UpdatedAt updatedAt={updatedAt} />
      <CreatedAt createdAt={createdAt} />
      <TagIconList tags={tags} title={title} />
    </small>
  );
};

export const BlogInfo: VFC<Props> = ({ createdAt, tags, title, updatedAt }) => {
  return (
    <PureBlogInfo
      createdAt={createdAt}
      tags={tags}
      title={title}
      updatedAt={updatedAt}
    />
  );
};

export type PureProps = Props;

export type Props = Omit<
  CreatedAtProps & UpdatedAtProps & TagIconListProps,
  ''
>;
