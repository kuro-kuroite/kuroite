import React, { VFC } from 'react';

import { DarkMode } from '../DarkMode/DarkMode';
import { GitHubLink, Props as GitHubLinkProps } from '../GitHubLink/GitHubLink';
import { RssFeedLink } from '../RssFeedLink/RssFeedLink';
import styles from './HeaderMenuIconList.module.css';

export const PureHeaderMenuIconList: VFC<PureProps> = ({
  social: { gitHub },
}) => (
  <ul className={styles.List}>
    <li className={styles.InvisibleSm}>
      <RssFeedLink />
    </li>
    <li>
      <GitHubLink account={gitHub} />
    </li>
    <li>
      <DarkMode />
    </li>
  </ul>
);

export const HeaderMenuIconList: VFC<Props> = ({ social }) => {
  return <PureHeaderMenuIconList social={social} />;
};

export type PureProps = Props;

export type Props = {
  social: {
    [P in 'gitHub']: GitHubLinkProps['account'];
  };
};
