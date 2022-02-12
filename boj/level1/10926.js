const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  console.log(input[0] + '??!');
}

solution();
