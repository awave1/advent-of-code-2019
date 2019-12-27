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
    default: 1,
  })
  .option('all', {
    alias: 'A',
    boolean: true,
    description: 'Run all solutions',
  })
  .help().argv;

const { day, part } = argv;

const getInput = (day, part) => {
  const basePath = (file = '') => `${__dirname}/day${day}/${file}`;
  const input = fs
    .readdirSync(basePath())
    .map(basePath)
    .find(f => f.includes(`input${day}.${part}`));

  if (input && fs.existsSync(input)) {
    return fs.readFileSync(input, 'utf-8');
  }

  return '';
};

const { solve } = require(`./day${day}/day${day}${part ? `.p${part}` : ''}`);
const result = solve(getInput(day, part));
console.log(
  `solution for day ${day}${part ? ` part ${part}` : ''} = ${result}`
);
