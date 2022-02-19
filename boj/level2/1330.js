const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  let [num1, num2] = input[0].split(' ');
  num1 = Number(num1);
  num2 = Number(num2);

  if (num1 > num2) {
    console.log('>');
  } else if (num1 === num2) {
    console.log('==');
  } else {
    console.log('<');
  }
}

solution();
