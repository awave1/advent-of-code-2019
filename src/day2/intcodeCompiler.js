/**
 * Opcodes:
 *   - 99: Halts the execution
 *   - 1: Adds numbers
 *        Read numbers from two positions and stores the result in a third position
 *        Integers immefiately after the opcode tell you these three positions
 *          - the first two indicate the position from which you should read the input values,
 *          - the third indicates the position at which the output is stored
 *          e.g 1,10,20,30 will add numbers at 10 and 20 and store result in 30
 *   - 2: Multiplies numbers
 *        Read numbers from two positions and stores the result in a third position
 *        Integers immefiately after the opcode tell you these three positions
 *          - the first two indicate the position from which you should read the input values,
 *          - the third indicates the position at which the output is stored
 *          e.g 1,10,20,30 will multiply numbers at 10 and 20 and store result in 30
 */

const opcodes = {
  HALT: 99,
  ADD: 1,
  MUL: 2,
};

class IntCC {
  constructor(code) {
    this.code = code;
  }

  parse() {
    return this.code
      .split(',')
      .map(Number)
      .filter(n => !isNaN(n));
  }

  compile() {
    const params = this.parse();
    const { HALT, ADD, MUL } = opcodes;

    // Command size is 4, therefore iterate over blocks of 4
    for (let i = 0; i < params.length; i += 4) {
      const op = params[i];

      if (op === ADD || op === MUL) {
        const index1 = params[i + 1];
        const index2 = params[i + 2];

        const val1 = params[index1];
        const val2 = params[index2];
        const resultIndex = params[i + 3];

        params[resultIndex] = op === ADD ? val1 + val2 : val1 * val2;
      } else if (op === HALT) {
        console.warn('HALT_OP found, stopping');
        break;
      }
    }

    return params.join(',');
  }
}

module.exports = { IntCC };
