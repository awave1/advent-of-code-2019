
const { solve } = require('./day4.p2');
const tests = [
  {
    input: 'TODO',
    expected: false,
  },
];

const check = ({ input, expected }) => expect(solve(input)).toBe(expected);
test('day4.p2', () => check(tests[0]));
