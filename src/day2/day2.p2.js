const { IntCC } = require('./intcodeCompiler');

function solve(input) {
  const compiler = new IntCC(input);
  return compiler.compile();
}

module.exports = {
  solve,
};
