const day1 = require('./day1');

test('day1: calculates correct values', () => {
  const testValues = [12, 14, 1969, 100756];
  const expectedResults = [2, 2, 654, 33583].reduce((a, b) => a + b, 0);

  expect(day1(testValues)).toEqual(expectedResults);
});
