import * as yargs from 'yargs';
import * as fs from 'fs';

const argv = yargs
  .usage('$0 [args]')
  .option('day', {
    alias: 'd',
    number: true,
    description: 'Run solution for specified day',
    type: 'number',
  })
  .option('part', {
    alias: 'p',
    number: true,
    description: 'Specify part for the problem of the day',
    implies: 'day',
    default: 1,
    type: 'number',
  })
  .option('all', {
    alias: 'A',
    boolean: true,
    description: 'Run all solutions',
    type: 'boolean',
  })
  .help().argv;

const { day, part } = argv;

function readInput(day: number, part: number): string {
  const basePath = (file = '') => `${__dirname}/day${day}/${file}`;
  const input = fs
    .readdirSync(basePath())
    .map(basePath)
    .find(f => f.includes(`input${day}.${part}.txt`));

  if (input && fs.existsSync(input)) {
    return fs.readFileSync(input, 'utf-8');
  }

  return '';
}

const { solve } = require(`./day${day}/day${day}${part ? `.p${part}` : ''}`);

const input = readInput(day, part);

if (!input || input === '') {
  console.warn(`could not find input in ${__dirname}/day${day}`);
} else {
  const result = solve(input);
  console.log(
    `solution for day ${day}${part ? ` part ${part}` : ''} = ${result}`
  );
}
