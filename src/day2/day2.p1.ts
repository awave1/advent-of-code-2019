import IntCC from '../intcode/intcodeCompiler';

export function solve(input, withNounAndVerb = true) {
  const compiler = new IntCC(input);
  if (withNounAndVerb) {
    compiler.setNounAndVerb(12, 2);
  }

  return compiler.compile();
}
