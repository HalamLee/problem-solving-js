const fs = require('fs');

const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => Number(el));

const nums = input.splice(1, input.length);
const sortedNums = nums.sort((a, b) => a - b);

console.log(sortedNums.join('\n'));
