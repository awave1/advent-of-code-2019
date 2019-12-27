const { solve } = require('./day2.p2');

test('day2', () => {
  const tests = [
    {
      program: `1,9,10,3,2,3,11,0,99,30,40,50`,
      result: `3500,9,10,70,2,3,11,0,99,30,40,50`,
    },
    {
      program: `1,0,0,0,99`,
      result: `2,0,0,0,99`,
    },
    {
      program: `2,4,4,5,99,0`,
      result: `2,4,4,5,99,9801`,
    },
  ];

  tests.forEach(({ program, result }) => {
    expect(solve(program)).toEqual(result);
  });
});
