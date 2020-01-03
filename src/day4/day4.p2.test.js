const { checkPassword } = require('./day4.p2');

test('day4.p2: check password - should not meet the criteria: not sorted', () => {
  const pass = 312233;
  expect(checkPassword(pass)).toBe(false);
});

test('day4.p2: check password - should meet the criteria - simple case', () => {
  const pass = 112234;
  expect(checkPassword(pass)).toBe(true);
});

test('day4.p2: check password - should meet the criteria - simple case - all duplicates', () => {
  const pass = 112233;
  expect(checkPassword(pass)).toBe(true);
});

test('day4.p2: check password - should fail - repeated `44` is part of `444`', () => {
  const pass = 123444;
  expect(checkPassword(pass)).toBe(false);
});

test('day4.p2: check password - should meet the criteria - `1111`', () => {
  const pass = 111122;
  expect(checkPassword(pass)).toBe(true);
});

test('day4.p2: check password - `377788` should meet the criteria',() => {
  const pass = 377788;
  expect(checkPassword(pass)).toBe(true);
});
