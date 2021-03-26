export type Key = 'Not Found' | 'このページは存在しません' | 'Topページに戻る';

export type NotFoundI18n = {
  [key in Key]: string;
};
