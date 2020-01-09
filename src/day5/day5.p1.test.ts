import { solve } from './day5.p1';
const tests = [
  {
    input: 'TODO',
    expected: false,
  },
];

const check = ({ input, expected }) => expect(solve(input)).toBe(expected);
test('day5.p1', () => check(tests[0]));
