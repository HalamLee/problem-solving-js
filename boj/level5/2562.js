const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  let numbers = [];
  input.map((el) => {
    numbers.push(Number(el));
  });
  let max = Math.max(...numbers);
  console.log(max);
  console.log(numbers.indexOf(max) + 1);
}

solution();
