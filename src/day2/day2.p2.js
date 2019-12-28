const { IntCC } = require('./intcodeCompiler');

function solve(input) {
  const compiler = new IntCC(input);
  const expected = 19690720;
  let noun = 0;
  let verb = 0;
  let found = false;

  for (let i = 0; i < 99 && !found; i++) {
    for (let j = 0; j < 99 && !found; j++) {
      const result = compiler.setNounAndVerb(i, j).compile();
      if (result === expected) {
        noun = i;
        verb = j;
        found = true;
      }
      compiler.reset();
    }
    compiler.reset();
  }

  return 100 * noun + verb;
}

module.exports = {
  solve,
};
