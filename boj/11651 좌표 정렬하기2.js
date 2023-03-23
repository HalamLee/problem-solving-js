const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const data = [];
let answer = '';

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  data.push([x, y]);
}

function compare(a, b) {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
}

const sorted = data.sort(compare);

for (let arr of sorted) {
  answer += arr[0] + ' ' + arr[1] + '\n';
}

console.log(answer);
