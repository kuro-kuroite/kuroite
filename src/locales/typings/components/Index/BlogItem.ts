// NOTE: キーを追加 export type Key = 'キー1' | 'キー2';
export type Key = '{slug} へのリンク';

export type BlogItemI18n = {
  [key in Key]: string;
};
