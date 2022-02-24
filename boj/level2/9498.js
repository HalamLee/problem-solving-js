const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  let score = '';
  let num = Number(input[0]);
  if (90 <= num && num <= 100) {
    score = 'A';
  } else if (80 <= num && num <= 89) {
    score = 'B';
  } else if (70 <= num && num <= 79) {
    score = 'C';
  } else if (60 <= num && num <= 69) {
    score = 'D';
  } else {
    score = 'F';
  }
  console.log(score);
}

solution();
