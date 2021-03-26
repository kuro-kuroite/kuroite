import React, { MouseEventHandler, useCallback, VFC } from 'react';

import { LangType, setLang } from '../../../reducer/lang/langSlice';
import { selectLang, useDispatch, useSelector } from '../../../reducer/store';
import { useT } from '../../../utils/i18n';
import styles from './I18nMode.module.css';

export const PureI18nMode: VFC<PureProps> = ({ mode, onClick }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/layout/i18nMode');

  return (
    <label className={styles.I18nMode}>
      <input
        aria-label={mode === 'ja' ? t('英語アイコン') : t('日本語アイコン')}
        className={styles.Checkbox}
        data-testid="i18nModeCheckbox"
        onClick={onClick}
        type="checkbox"
      />
      <span className={styles.Icon}>{mode === 'ja' ? '🇺🇸' : '🇯🇵'}</span>
    </label>
  );
};

export const I18nMode: VFC<Props> = () => {
  const lang = useSelector(selectLang);
  const dispatch = useDispatch();
  const handleI18nModeClick: PureProps['onClick'] = useCallback(
    () => dispatch(setLang(lang === 'ja' ? 'en' : 'ja')),
    [dispatch, lang]
  );

  return <PureI18nMode mode={lang} onClick={handleI18nModeClick} />;
};

export type PureProps = {
  mode: LangType;
  onClick: MouseEventHandler<HTMLInputElement>;
};

export type Props = Record<string, unknown>;
