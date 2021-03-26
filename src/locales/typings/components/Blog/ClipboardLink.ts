// NOTE: キーを追加 export type Key = 'キー1' | 'キー2';
export type Key = 'このページのリンクをコピーする';

export type ClipboardLinkI18n = {
  [key in Key]: string;
};
