import { toInteger } from 'lodash';

/**
 * Check if given password matches the following:
 *
 * - It is a six-digit number.
 * - Two adjacent digits are the same (like 22 in 122345).
 * - Going from left to right, the digits never decrease;
 *   they only ever increase or stay the same (like 111123 or 135679).
 *
 * @param {number} password
 * @return {boolean} true if all conditions are satisfied
 */
export function checkPassword(password) {
  let pass = `${password}`.split('').map(toInteger);

  if (pass.length < 6) {
    return false;
  }

  const isIncreasing = pass.every(
    (val, i, arr) => i === 0 || arr[i - 1] <= val
  );

  if (!isIncreasing) {
    return false;
  }

  const dups = new Map();
  for (let i = 0; i < pass.length; i++) {
    const num = pass[i];

    if (!dups.has(num)) {
      dups.set(num, 1);
    } else {
      let count = dups.get(num);
      count += 1;
      dups.set(num, count);
    }
  }

  const entries = dups.entries();
  for (const [num, count] of entries) {
    if (count === 1) {
      dups.delete(num);
    }
  }

  return dups.size !== 0;
}

function countPossible(from, to) {
  let count = 0;
  for (let i = from; i <= to; i++) {
    if (checkPassword(i)) {
      count++;
    }
  }

  return count;
}

export function solve(input) {
  const [from, to] = input.split('-').map(toInteger);
  return countPossible(from, to);
}
