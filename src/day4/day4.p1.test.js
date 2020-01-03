const { solve, checkPassword } = require('./day4.p1');

const check = ({ input, expected }) => expect(solve(input)).toBe(expected);

test('day4.p1: check password - should meet the criteria', () => {
  const pass = 111111;
  expect(checkPassword(pass)).toBe(true);
});

test('day4.p1: check password - should fail - less than 6 chars', () => {
  const pass = 123;
  expect(checkPassword(pass)).toBe(false);
});

test('day4.p1: check password - should not meet the criteria - decreasing pair', () => {
  const pass = 223450;
  expect(checkPassword(pass)).toBe(false);
});

test('day4.p1: check password - should not meet the criteria - no double', () => {
  const pass = 123789;
  expect(checkPassword(pass)).toBe(false);
});
