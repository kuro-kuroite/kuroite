import React, { VFC } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';

import { useT } from '../../../utils/i18n';
import styles from './GitHubLink.module.css';

export const PureGitHubLink: VFC<PureProps> = ({ account }) => {
  const t = useT('components/layout/gitHubLink');

  return (
    <a
      aria-label={t('GitHubアカウントページ')}
      className={styles.Link}
      href={`https://github.com/${account}/`}
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      <VscGithubInverted />
    </a>
  );
};

export const GitHubLink: VFC<Props> = ({ account }) => {
  return <PureGitHubLink account={account} />;
};

export type PureProps = Props;

export type Props = {
  account: string;
};
