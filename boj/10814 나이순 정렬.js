const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const temp = input.splice(1, input.length);
const data = [];
let answer = '';

for (let t of temp) {
  const [age, name] = t.split(' ');
  data.push([Number(age), name]);
}

const sortedData = data.sort((a, b) => {
  if (a[0] != b[0]) return a[0] - b[0];
  else return 0;
});

for (let s of sortedData) {
  answer += s[0] + ' ' + s[1] + '\n';
}

console.log(answer);
