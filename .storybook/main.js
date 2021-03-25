'use strict';

// NOTE: use ts-node instead of tsc.js because of require('fs')
// NOTE: .storybook/main.jsから，scripts/tscを呼ぶと以下のエラーが発生
//        ERROR in ./scripts/tsc.js
//        Module not found: Error: Can't resolve 'fs' in './scripts'
//        https://qiita.com/kenboo/items/996daf12a3eb17b7c89f#%E3%81%93%E3%81%86%E3%81%98%E3%82%83%E3%81%AA%E3%81%84%E3%81%8B
require('ts-node').register(
  require('jsonc-parser').parse(
    require('fs').readFileSync('./.storybook/tsconfig.json', 'utf-8')
  )
);

module.exports = require('../config/storybook/main.ts');
