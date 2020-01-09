const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const { buildTestTemplate, buildSolutionTemplate, getInput } = require('./template');

const argv = yargs.usage('$0 [args]').option('day', {
  alias: 'd',
  number: true,
  description: 'Create template for specified day number',
  required: true,
}).argv;

const { day } = argv;

if (!day) {
  console.warn('Please specify the day (via -d <day> flag)');
  return;
}

const basePath = (file = '') => `${__dirname}/day${day}/${file}`;
fs.mkdir(basePath(), { recursive: true }, async (err) => {
  if (err) {
    throw err;
  }

  const input = await getInput(day);

  const files = [
    {
      name: `day${day}.p1.js`,
      content: buildSolutionTemplate(),
    },
    {
      name: `day${day}.p2.js`,
      content: buildSolutionTemplate(),
    },
    {
      name: `day${day}.p1.test.js`,
      content: buildTestTemplate(day),
    },
    {
      name: `day${day}.p2.test.js`,
      content: buildTestTemplate(day, 2),
    },
    {
      name: `input${day}.1`,
      content: input,
    },
    {
      name: `input${day}.2`,
      content: input,
    },
  ];

  files.forEach(({ name, content }) =>
    fs.writeFileSync(basePath(name), content)
  );
});
