const tsc = require('../scripts/src/js/tsc');

// eslint-disable-next-line padding-line-between-statements
const path = './config/jest/loader-shim.ts';

// HACK: eval compiled code instead of ts-node
eval(tsc(path));
