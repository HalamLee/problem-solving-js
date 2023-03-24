const fs = require('fs');
let [nk, ...values] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
let [n, k] = nk.split(' ').map(Number);
let cnt = 0;

values = values.reverse().map(Number);

for (let value of values) {
  if (k >= value) {
    let quotient = Math.floor(k / value);
    let remainder = k % value;

    if (quotient) {
      cnt += quotient;
      k = remainder;
    }
  }
}

console.log(cnt);
