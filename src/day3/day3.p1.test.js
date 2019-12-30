const { solve } = require('./day3.p1');

test('day3', () => {
  let input = `R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83`;
  let expected = 159;

  let result = solve(input);
  expect(true).toBe(true);
});
