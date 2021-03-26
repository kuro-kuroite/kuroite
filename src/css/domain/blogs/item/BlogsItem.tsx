import React, { VFC } from 'react';

import styles from './style.module.css';

export const PureBlogsItem: VFC<PureProps> = ({ description, slug, title }) => (
  <article>
    <a aria-label={`link to ${slug}`} className={styles.link} href={slug}>
      <h1 className={styles.title}>{title}</h1>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </a>
  </article>
);

export type PureProps = {
  description: string;
  slug: string;
  title: string;
};
