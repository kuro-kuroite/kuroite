const ts = require('typescript');
const path = require('path');

// @params path of ts file
// @returns compiled program
function tsc(filePath, tsConfigPath = '../../../tsconfig.json') {
  try {
    const fs = require('fs');
    const source = fs.readFileSync(
      path.resolve(__dirname, '../../../', filePath),
      'utf-8'
    );
    const result = ts.transpileModule(source, require(tsConfigPath));

    return JSON.parse(JSON.stringify(result.outputText));
  } catch (e) {
    console.log(`tsc read file error!!: ${e}`);
  }
}

module.exports = tsc;
