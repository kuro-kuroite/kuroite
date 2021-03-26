import React, { VFC } from 'react';

import { useT } from '../../../utils/i18n';
import { HeaderMenu, Props as HeaderMenuProps } from '../HeaderMenu/HeaderMenu';
import { LogoLink, Props as LogoLinkProps } from '../LogoLink/LogoLink';
import styles from './HeaderNav.module.css';

export const PureHeaderNav: VFC<PureProps> = ({ pages, social, title }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/layout/headerNav');

  return (
    <nav aria-label={t('ヘッダナビゲーション')} className={styles.Nav}>
      <LogoLink title={title} />
      <HeaderMenu pages={pages} social={social} />
    </nav>
  );
};

export const HeaderNav: VFC<Props> = ({ social, title }) => {
  const pages: PureProps['pages'] = [
    {
      title: 'blog',
      to: '/',
    },
    {
      title: 'about',
      to: '/about/',
    },
  ];

  return <PureHeaderNav pages={pages} social={social} title={title} />;
};

export type PureProps = Omit<Props & Pick<HeaderMenuProps, 'pages'>, ''>;

export type Props = Omit<Omit<HeaderMenuProps, 'pages'> & LogoLinkProps, ''>;
