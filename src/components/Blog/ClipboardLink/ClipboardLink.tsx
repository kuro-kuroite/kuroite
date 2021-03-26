import React, { VFC } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { BsLink45Deg } from 'react-icons/bs';

import { useT } from '../../../utils/i18n';
import styles from './ClipboardLink.module.css';

export const PureClipboardLink: VFC<PureProps> = ({ url }) => {
  const t = useT('components/blog/clipboardLink');

  return (
    <span
      aria-label={t('このページのリンクをコピーする')}
      className={styles.ClipboardLink}
    >
      <CopyToClipboard text={url}>
        <BsLink45Deg />
      </CopyToClipboard>
    </span>
  );
};

export const ClipboardLink: VFC<Props> = ({ url }) => {
  return <PureClipboardLink url={url} />;
};

export type PureProps = Props;

export type Props = {
  url: string;
};
