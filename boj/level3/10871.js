const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  const [n, x] = input[0].split(' ');
  const numbers = input[1].split(' ');
  let result = [];
  for (let i = 0; i <= Number(n); i++) {
    if (numbers[i] < Number(x)) {
      result.push(Number(numbers[i]));
    }
  }
  console.log(result.join(' '));
}

solution();
