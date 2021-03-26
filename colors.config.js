'use strict';

const tsc = require('./scripts/src/js/tsc');

// eslint-disable-next-line padding-line-between-statements
const path = './config/colors.config.ts';

// HACK: eval compiled code instead of ts-node
// NOTE: import { colors } from 'path/to/colors.config' で colors を使用
//        module.exports.colors で export
module.exports.colors = eval(tsc(path));
