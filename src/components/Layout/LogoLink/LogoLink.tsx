import { Link } from 'gatsby';
import React, { VFC } from 'react';

import { Logo } from './assets/Logo';
import styles from './LogoLink.module.css';

export const PureLogoLink: VFC<PureProps> = ({ title }) => (
  <Link
    aria-label={title}
    className={styles.Banner}
    data-brand={title}
    // NOTE: `ロゴタイプ: ロゴやブランド名の一部であるテキストにはコントラストの要件はありません。` https://www.w3.org/TR/WCAG21/#contrast-minimum
    // HACK: a11y error! color-contrastを回避するため、css data変数でブランド名を表示
    to="/"
  >
    {/* NOTE: jest snapshotでpng等のバイナリ画像をmockできないため，svgを使用 */}
    <Logo className={styles.Icon} />
    {/* NOTE: a11y error! color-contrast
            https://dequeuniversity.com/rules/axe/3.4/color-contrast?application=axeAPI */}
    {/* <span aria-hidden="true" className={styles.Brand} >{title}</span> */}
  </Link>
);

export const LogoLink: VFC<Props> = ({ title }) => {
  return <PureLogoLink title={title} />;
};

export type PureProps = Props;

export type Props = {
  title: string;
};
