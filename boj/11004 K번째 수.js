const fs = require('fs');

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const index = Number(input[0][1]) - 1;

const sortedNums = input[1].map((el) => Number(el)).sort((a, b) => a - b);

console.log(sortedNums[index]);
