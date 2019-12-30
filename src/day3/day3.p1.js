const _ = require('lodash');
const { abs } = Math;

const parse = data =>
  data.split('\n').map(line =>
    line.split(',').map(v => ({
      direction: v.substring(0, 1),
      val: Number.parseInt(v.substring(1), 10),
    }))
  );

const dx = { R: 1, L: -1, U: 0, D: 0 };
const dy = { U: 1, D: -1, L: 0, R: 0 };

/**
 *
 * @param {string[]} wire
 */
function plotPoints(wire) {
  let x = 0;
  let y = 0;
  const set = new Set();

  set.add({ x, y });

  for (const { direction, val } of wire) {
    for (let i = 0; i < val; i++) {
      x += dx[direction];
      y += dy[direction];

      set.add({ x, y });
    }
  }

  return [...set];
}

function intersection(pointsA, pointsB) {
  const result = [];
  for (const { x: xA, y: yA } of pointsA) {
    for (const { x: xB, y: yB } of pointsB) {
      if (xA === xB && yA === yB) {
        result.push({ x: xA, y: yB });
      }
    }
  }

  return result;
}

function solve(input) {
  const [wireA, wireB] = parse(input);
  const pointsA = plotPoints(wireA);
  const pointsB = plotPoints(wireB);
  const intersected = intersection(pointsA, pointsB);
  const sums = intersected
    .map(({ x, y }) => abs(x) + abs(y))
    .filter(sum => sum != 0);

  return _.min(sums);
}

module.exports = {
  solve,
};
