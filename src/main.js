const fs = require('fs');

const day = process.env.DAY || process.argv[2];

const getInput = day =>
  fs
    .readFileSync(`${__dirname}/day${day}/input${day}`, 'utf-8')
    .split('\n')
    .map(n => Number(n));

const solution = require(`./day${day}`);

console.log(`solution for day ${day} = ${solution(getInput(day))}`);
