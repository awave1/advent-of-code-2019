const fs = require('fs');
const yargs = require('yargs');

const argv = yargs
  .usage('$0 [args]')
  .option('day', {
    alias: 'd',
    number: true,
    description: 'Run solution for specified day',
  })
  .option('part', {
    alias: 'p',
    number: true,
    description: 'Specify part for the problem of the day',
    implies: 'day',
  })
  .option('all', {
    alias: 'A',
    boolean: true,
    description: 'Run all solutions',
  })
  .help().argv;

const { day, part } = argv;

const getInput = day =>
  fs.readFileSync(`${__dirname}/day${day}/input${day}`, 'utf-8');

const { solve } = require(`./day${day}/day${day}${part ? `.p${part}` : ''}`);
const result = solve(getInput(day));
console.log(
  `solution for day ${day}${part ? ` part ${part}` : ''} = ${result}`
);
