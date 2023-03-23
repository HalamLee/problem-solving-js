const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const data = input[1].split(' ').map(Number);
const arr = [...new Set(JSON.parse(JSON.stringify(data)))];
arr.sort((a, b) => a - b);

const obj = {};
const answer = [];

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = i;
  }
}

for (let num of data) {
  answer.push(obj[num]);
}

console.log(answer.join(' '));
