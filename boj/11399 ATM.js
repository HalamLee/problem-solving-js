const fs = require('fs');
let [n, times] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = 0;

times = times
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    answer += times[j];
  }
}
console.log(answer);
