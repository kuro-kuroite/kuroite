import React, { VFC } from 'react';

import {
  PureIconText as PureIconUpdatedAt,
  PureProps as IconUpdatedAtPureProps,
} from '../../../../common/icon/text/IconText';
import {
  PureIconText as PureIconCreatedAt,
  PureProps as IconCreatedAtPureProps,
} from '../../icon/text/IconText';
import {
  PureProps as TagListPureProps,
  PureTagList,
} from '../../tag/list/TagList';
import styles from './style.module.css';

export const PureItemInfo: VFC<PureProps> = ({
  createdAt,
  tags,
  updatedAt,
}) => (
  // FYI: Some page content is not contained by landmarks
  <small aria-label="blog info" className={styles.info}>
    <PureIconUpdatedAt text={updatedAt} />
    <PureIconCreatedAt createdAt={createdAt} />
    <PureTagList tags={tags} />
  </small>
);

export type PureProps = Omit<
  IconCreatedAtPureProps &
    TagListPureProps &
    {
      [P in 'updatedAt']: IconUpdatedAtPureProps['text'];
    },
  ''
>;
