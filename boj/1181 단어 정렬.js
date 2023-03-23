const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const data = [];
let answer = '';

for (let i = 1; i <= n; i++) {
  data.push(input[i]);
}

function compare(a, b) {
  if (a.length != b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
}

const setData = [...new Set(data)];
setData.sort(compare);

console.log(setData.join('\n'));
