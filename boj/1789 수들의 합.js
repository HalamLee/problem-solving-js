const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let num = 1;
let sum = 1;

while (sum <= n) {
  num++;
  sum += num;
}

console.log(num - 1);
