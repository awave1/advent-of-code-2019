const { IntCC } = require('../intcode/intcodeCompiler');

function solve(input, expected = 19690720) {
  const compiler = new IntCC(input);
  let noun = 0;
  let verb = 0;
  let found = false;

  for (let i = 0; i < 99 && !found; i++) {
    for (let j = 0; j < 99 && !found; j++) {
      const result = compiler.setNounAndVerb(i, j).compile();
      if (result === expected) {
        noun = i;
        verb = j;
        return 100 * noun + verb;
      }
      compiler.reset();
    }
  }

  return -1;
}

module.exports = {
  solve,
};
