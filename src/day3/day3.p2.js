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

function plotPoints(entries) {
  let x = 0;
  let y = 0;
  let steps = 0;
  let map = new Map();

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    for (const { direction, val } of entry) {
      for (let j = 0; j < val; j++) {
        x += dx[direction];
        y += dy[direction];
        steps++;

        const key = `${x},${y}`;
        if (!map.has(key)) {
          map.set(key, [{ index: i, steps }]);
        } else {
          const el = map.get(key).find(({ index }) => index === i);
          if (!el) {
            map.get(key).push({ index: i, steps });
          }
        }
      }
    }

    x = 0;
    y = 0;
    steps = 0;
  }

  return map;
}

function intersection(hashmap) {
  const result = [];
  const entries = hashmap.entries();

  for (let [k, v] of entries) {
    if (v.length === 2) {
      const [x, y] = k.split(',');
      const steps = v.reduce((acc, curr) => acc + curr.steps, 0);
      result.push({ x: _.toInteger(x), y: _.toInteger(y), steps });
    } else {
      hashmap.delete(k);
    }
  }

  return result;
}

function solve(input) {
  const plotResult = plotPoints(parse(input));
  const intersected = intersection(plotResult);
  const sums = intersected.map(({ steps }) => steps);

  return _.min(sums);
}

module.exports = {
  solve,
};
