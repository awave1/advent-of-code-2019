const { solve } = require('./day3.p1');

test('day3', () => {
  let input = `R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83`;
  let expected = 159;
  let result = solve(input);

  expect(result).toBe(expected);

  input = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;
  expected = 135;
  result = solve(input);

  expect(result).toBe(expected);
});
