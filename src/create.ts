import * as yargs from 'yargs';
import * as fs from 'fs';
import * as path from 'path';
import { buildSolutionTemplate, buildTestTemplate, getInput } from './template';

const argv = yargs.usage('$0 [args]').option('day', {
  alias: 'd',
  number: true,
  description: 'Create template for specified day number',
  required: true,
  type: 'number',
}).argv;

const { day } = argv;

function run(day: number): void {
  if (!day) {
    console.warn('Please specify the day (via -d <day> flag)');
    return;
  }

  const basePath = (file = '') => `${__dirname}/day${day}/${file}`;

  fs.mkdir(basePath(), { recursive: true }, async err => {
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
}

run(day);
