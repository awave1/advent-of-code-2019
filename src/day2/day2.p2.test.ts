import { solve } from './day2.p2';
import IntCC from '../intcode/intcodeCompiler';

test('day2', () => {
  const program = `1,0,0,0,99`;
  const expected = 100 * 1 + 2;
  const compiled = new IntCC(program).setNounAndVerb(1, 2).compile();
  const actual = solve(program, compiled);

  expect(actual).toEqual(expected);
});
