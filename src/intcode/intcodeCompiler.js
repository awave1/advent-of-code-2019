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
 *   - 3: Write argument to specified position
 *        Takes a single integer as input and saves it to the position given by its only parameter.
 *        For example, the instruction 3,50 would take an input value and store it at address 50.
 *   - 4: Output value at specified address
 *        Outputs the value of its only parameter.
 *        For example, the instruction 4,50 would output the value at address 50.
 */
const opcodes = {
  HALT: 99,
  ADD: 1,
  MUL: 2,
  WRITE_TO: 3,
  PRINT: 4,
};

class IntCC {
  constructor(code) {
    this.code = code;
    this.program = this.parse();
  }

  parse() {
    return this.code
      .split(',')
      .map(Number)
      .filter(n => !isNaN(n));
  }

  setNounAndVerb(nounVal, verbVal) {
    const noun = 1;
    const verb = 2;

    if (nounVal && verbVal) {
      this.program[noun] = nounVal;
      this.program[verb] = verbVal;
    }

    return this;
  }

  compile() {
    const { program } = this;
    const { HALT, ADD, MUL } = opcodes;

    // Command size is 4, therefore iterate over blocks of 4
    for (let i = 0; i < program.length; i += 4) {
      const op = program[i];

      if (op === ADD || op === MUL) {
        const index1 = program[i + 1];
        const index2 = program[i + 2];

        const val1 = program[index1];
        const val2 = program[index2];

        const resultIndex = program[i + 3];

        program[resultIndex] = op === ADD ? val1 + val2 : val1 * val2;
      } else if (op === HALT) {
        break;
      }
    }

    return program[0];
  }

  reset() {
    this.program = this.parse();
  }
}

module.exports = { IntCC };
