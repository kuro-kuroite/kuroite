export type Key =
  | 'ダークモードアイコン'
  | 'ライトモードアイコン'
  | 'ダークモードリンク'
  | 'ライトモードリンク';

export type DarkModeI18n = {
  [key in Key]: string;
};
