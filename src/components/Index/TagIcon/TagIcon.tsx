import { Link } from 'gatsby';
import React from 'react';

import styles from './TagIcon.module.css';

export const PureTagIcon: React.VFC<PureProps> = ({ tag }) => (
  <Link className={styles.TagIcon} to={`/tags/${tag}/`}>
    {tag}
  </Link>
);

export const TagIcon: React.VFC<Props> = ({ tag }) => {
  return <PureTagIcon tag={tag} />;
};

export type PureProps = Props;

export type Props = {
  tag: string;
};
