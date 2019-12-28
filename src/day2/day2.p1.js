const { IntCC } = require('./intcodeCompiler');

function solve(input, withNounAndVerb = true) {
  const compiler = new IntCC(input);
  if (withNounAndVerb) {
    compiler.setNounAndVerb(12, 2);
  }

  return compiler.compile();
}

module.exports = {
  solve,
};
