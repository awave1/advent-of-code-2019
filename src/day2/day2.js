#!/usr/bin/env node

const fs = require('fs');

/**
 * Halts the execution
 */
const HALT_OP = 99;

/**
 * Adds numbers
 * Read numbers from two positions and stores the result in a third position
 * Integers immefiately after the opcode tell you these three positions
 *   - the first two indicate the position from which you should read the inpur values,
 *   - the third indicates the position at which the output is stored
 *
 * e.g 1,10,20,30 will add numbers at 10 and 20 and store result in 30
 */
const ADD_OP = 1;

/**
 * Multiplies numbers
 * Read numbers from two positions and stores the result in a third position
 * Integers immefiately after the opcode tell you these three positions
 *   - the first two indicate the position from which you should read the input values,
 *   - the third indicates the position at which the output is stored
 *
 * e.g 1,10,20,30 will multiply numbers at 10 and 20 and store result in 30
 */
const MUL_OP = 2;

/**
 * Once you're done processing an opcode, move to the next one by stepping forward 4 positions.
 */
const COMMAND_SIZE = 4;

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    let result = [];
    for (let i = 0; i < this.length; i += chunkSize) {
      result.push(this.slice(i, i + chunkSize));
    }

    return result;
  },
});

function solve(input) {
  const params = input
    .split(',')
    .map(Number)
    .filter(n => !isNaN(n));

  for (let i = 0; i < params.length; i += COMMAND_SIZE) {
    const op = params[i];

    if (op === ADD_OP || op === MUL_OP) {
      console.log({ op });
      const index1 = params[i + 1];
      const index2 = params[i + 2];

      const val1 = params[index1];
      const val2 = params[index2];
      const resultIndex = params[i + 3];

      console.log({ index1, index2, resultIndex });

      params[resultIndex] = op === ADD_OP ? val1 + val2 : val1 * val2;
    } else if (op === HALT_OP) {
      console.warn('HALT_OP found, stopping');
      break;
    }
  }

  console.log('Results:');
  params.chunk(COMMAND_SIZE).forEach(c => console.log(c));
  return params.join(',');
}

module.exports = {
  solve,
};
