import * as http from 'https';

export function buildTestTemplate(day: number, part?: number): string {
  return `
    import { solve } from './day${day}.p${part}'

    const tests = [
      {
        input: 'TODO',
        expected: false,
      },
    ];

    const check = ({ input, expected }) => expect(solve(input)).toBe(expected);
    test('day${day}.p${part}', () => check(tests[0]));`;
}

export function buildSolutionTemplate(): string {
  return `
    export function solve(input: string) {
      console.log('TODO');
    }
  `;
}

export function getInput(day: number): Promise<string> {
  const url = `https://adventofcode.com/2019/day/${day}/input`;
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        Cookie:
          'session=53616c7465645f5fba94a4d99192a5c37b18938c383984b001740d4c316f2e8b01201c9ceae4fe9ab9635db7eaf89440',
      },
    };

    http
      .get(url, options, res => {
        let data = '';
        res.on('data', chunk => {
          data += chunk;
        });

        res.on('end', () => resolve(data));
      })
      .on('error', err => reject(err));
  });
}
