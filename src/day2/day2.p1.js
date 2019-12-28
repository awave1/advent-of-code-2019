const { IntCC } = require('./intcodeCompiler');

function solve(input) {
  const compiler = new IntCC(input);
  return compiler.setNounAndVerb(12, 2).compile();
}

module.exports = {
  solve,
};
