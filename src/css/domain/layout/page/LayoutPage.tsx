import React, { FC } from 'react';

import layoutStyles from '../../../base/molecules/layout/style.module.css';
import {
  PureLayoutFooter,
  PureProps as LayoutFooterPureProps,
} from '../footer/LayoutFooter';
import { PureLayoutHeader } from '../header/LayoutHeader';

export const PureLayoutPage: FC<PureProps> = ({
  children,
  createdYear,
  year,
}) => (
  <div className={layoutStyles.container}>
    <PureLayoutHeader />
    <main>{children}</main>
    <PureLayoutFooter createdYear={createdYear} year={year} />
  </div>
);

export type PureProps = LayoutFooterPureProps;
