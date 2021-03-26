// NOTE: キーを追加 export type Key = 'キー1' | 'キー2';
export type Key = never;

export type UpdatedAtI18n = {
  [key in Key]: string;
};
