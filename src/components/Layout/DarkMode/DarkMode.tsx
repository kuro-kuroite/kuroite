import React, { MouseEventHandler, useCallback, useEffect, VFC } from 'react';

import { selectTheme, useDispatch, useSelector } from '../../../reducer/store';
import { setTheme, ThemeType } from '../../../reducer/theme/themeSlice';
import { useT } from '../../../utils/i18n';
import { DarkIcon } from './assets/DarkIcon';
import { LightIcon } from './assets/LightIcon';
import styles from './DarkMode.module.css';

export const PureDarkMode: VFC<PureProps> = ({ mode, onClick }) => {
  // HACK: 言語を変更するとき、t関数の言語も更新するため、Pure内で定義
  const t = useT('components/layout/darkMode');

  return (
    <span className={styles.Link}>
      <label
        aria-label={
          mode === 'light' ? t('ダークモードリンク') : t('ライトモードリンク')
        }
        className={styles.DarkMode}
      >
        <input
          aria-label={
            mode === 'light'
              ? t('ダークモードアイコン')
              : t('ライトモードアイコン')
          }
          className={styles.Checkbox}
          data-testid="darkModeCheckbox"
          onClick={onClick}
          type="checkbox"
        />
        {mode === 'light' ? (
          <DarkIcon className={styles.Icon} />
        ) : (
          <LightIcon className={styles.Icon} />
        )}
      </label>
    </span>
  );
};

export const useMode = (): [
  PureProps['mode'],
  (mode: PureProps['mode']) => void
] => {
  const theme = useSelector(selectTheme) ?? 'default';
  const dispatch = useDispatch();

  const setMode = (mode: PureProps['mode']) => {
    dispatch(setTheme(mode));

    return;
  };

  useEffect(() => {
    if (theme === 'default') {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        dispatch(setTheme('dark'));

        return;
      }
      dispatch(setTheme('light'));

      return;
    }

    dispatch(setTheme(theme));
  }, [dispatch, theme]);

  return [useSelector(selectTheme) ?? 'dark', setMode];
};

export const DarkMode: VFC<Props> = () => {
  const [mode, setMode] = useMode();
  const handleDarkModeClick: PureProps['onClick'] = useCallback(
    () => setMode(mode === 'dark' ? 'light' : 'dark'),
    [mode, setMode]
  );

  return <PureDarkMode mode={mode} onClick={handleDarkModeClick} />;
};

export type PureProps = {
  mode: NonNullable<ThemeType>;
  onClick: MouseEventHandler<HTMLInputElement>;
};

export type Props = Record<string, unknown>;
