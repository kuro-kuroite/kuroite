// NOTE: All files must be modules when the '--isolatedModules' flag is provided.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

describe('<PureSeo />', () => {
  // NOTE: <head>内の<title>要素を取得できないため
  describe('with siteTitle', () => {
    test.todo('siteTitleが空文字のとき、サイトタイトルは`{title}`である');

    test.todo(
      'siteTitleがあるとき、サイトタイトルは`{title} | {siteTitle}`である'
    );
  });
});
