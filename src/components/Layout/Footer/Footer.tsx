import React, { VFC } from 'react';

import { FooterNav } from '../FooterNav/FooterNav';
import {
  FooterNotice,
  Props as FooterNoticeProps,
} from '../FooterNotice/FooterNotice';
import styles from './Footer.module.css';

export const PureFooter: VFC<PureProps> = ({ createdYear, social, year }) => (
  /* NOTE: #footer for <ProgressBar /> */
  <footer className={styles.Footer} id="footer">
    <div className={styles.Container}>
      <FooterNav />
      <FooterNotice createdYear={createdYear} social={social} year={year} />
    </div>
  </footer>
);

export const Footer: VFC<Props> = ({ createdYear, social, year }) => {
  return <PureFooter createdYear={createdYear} social={social} year={year} />;
};

export type PureProps = Props;

export type Props = FooterNoticeProps;
