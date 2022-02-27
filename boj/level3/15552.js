const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  let result = '';
  for (let i = 1; i <= Number(input[0]); i++) {
    let numbers = input[i].split(' ');
    result += Number(numbers[0]) + Number(numbers[1]) + '\n';
  }
  console.log(result);
}

solution();
