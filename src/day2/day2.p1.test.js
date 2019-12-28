const { solve } = require('./day2.p1');

test('day2', () => {
  const tests = [
    {
      program: `1,9,10,3,2,3,11,0,99,30,40,50`,
      result: `3500`,
    },
    {
      program: `1,0,0,0,99`,
      result: `2`,
    },
    {
      program: `2,4,4,5,99,0`,
      result: `2`,
    },
  ];

  tests.forEach(({ program, result }) => {
    expect(solve(program)).toEqual(result);
  });
});
