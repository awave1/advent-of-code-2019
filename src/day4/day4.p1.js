const _ = require('lodash');

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
function checkPassword(password) {
  let pass = `${password}`;

  if (pass.length < 6) {
    return false;
  }

  let adjacentFound = false;
  let checkPassed = false;

  for (let i = 0; i < pass.length; i++) {
    let num = _.toInteger(pass[i]);
    let next;
    if (i !== pass.length - 1) {
      next = _.toInteger(pass[i + 1]);
    }

    let increasing = false;
    if (next !== undefined) {
      increasing = num <= next;
    } else {
      increasing = num >= pass[i - 1];
    }

    if (!adjacentFound) {
      adjacentFound = next ? num === next : num === pass[i - 1];
    }

    checkPassed = adjacentFound && increasing;

    // return early if sequence not in increasing order
    if (!increasing) {
      return false;
    }
  }

  return checkPassed;
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

function solve(input) {
  const [from, to] = input.split('-').map(_.toInteger);
  return countPossible(from, to);
}

module.exports = {
  solve,
  checkPassword,
};
