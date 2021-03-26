// NOTE: キーを追加 export type Key = 'キー1' | 'キー2';
export type Key = 'ブログ info';

export type BlogInfoI18n = {
  [key in Key]: string;
};
