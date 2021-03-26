import React, { VFC } from 'react';

import styles from './FooterNotice.module.css';

export const PureFooterNotice: VFC<PureProps> = ({
  social: { gitHub },
  year = new Date().getFullYear(),
  createdYear = 2020,
}) => (
  <small className={styles.Notice}>
    &copy;
    {`${year > createdYear ? `${createdYear}-` : ''}${year}`}
    <a className={styles.Account} href={`https://github.com/${gitHub}/`}>
      @{gitHub}
    </a>
  </small>
);

export const FooterNotice: VFC<Props> = ({
  createdYear,
  social: { gitHub },
  year,
}) => {
  return (
    <PureFooterNotice
      createdYear={createdYear}
      social={{ gitHub: gitHub }}
      year={year}
    />
  );
};

export type PureProps = Props;

export type Props = {
  createdYear?: number;
  social: {
    gitHub: string;
  };
  year?: number;
};
