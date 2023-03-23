const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dots = input.splice(1, input.length);

const newArr = [];

for (let dot of dots) {
  newArr.push(dot.split(' ').map(Number));
}

function compare(a, b) {
  if (a[0] > b[0]) return 1;
  else if (a[0] === b[0] && a[1] < b[1]) return -1;
  else if (a[0] < b[0]) return -1;
  else return 0;
}

const sortedArr = newArr.sort(compare);

let answer = '';

for (let i of sortedArr) {
  answer += `${i[0]} ${i[1]}` + '\n';
}

console.log(answer);
