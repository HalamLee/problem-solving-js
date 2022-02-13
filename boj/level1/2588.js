const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  const num1 = Number(input[0]);
  const num2 = input[1];
  const num1N = num1 * Number(num2[2]);
  const num2N = num1 * Number(num2[1]);
  const num3N = num1 * Number(num2[0]);
  console.log(num1N);
  console.log(num2N);
  console.log(num3N);
  console.log(num1N + num2N * 10 + num3N * 100);
}

solution();
