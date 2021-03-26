export type Key = '目次コンテナ' | '目次を隠す' | '目次' | '目次ナビゲーション';

export type TocI18n = {
  [key in Key]: string;
};
