'use strict';

const tsc = require('./scripts/src/js/tsc');

// eslint-disable-next-line padding-line-between-statements
const path = './config/jest/jest.config.ts';

// HACK: eval compiled code instead of ts-node
module.exports = eval(tsc(path));
