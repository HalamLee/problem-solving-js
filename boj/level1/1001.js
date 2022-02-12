const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  let num = input[0].split(' ');
  console.log(Number(num[0]) - Number(num[1]));
}

solution();
