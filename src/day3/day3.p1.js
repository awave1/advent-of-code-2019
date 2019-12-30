const parse = data => data.split('\n').map(line => line.split(','));

/**
 * - Find all intersections
 * - Find distances from origin to each intersection (manhattan distance)
 * - get the shortest
 *
 * @param {*} input
 */

function solve(input) {
  const parsed = parse(input);
  console.log(parsed);
}

module.exports = {
  solve,
};
