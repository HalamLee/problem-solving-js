const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  let numbers = [];
  input.map((el) => {
    numbers.push(Number(el));
  });
  console.log(Math.max(...numbers));
  // console.log(numbers.findIndex(Math.max(...numbers)));
  console.log(numbers);
  // console.log(numbers.findIndex(Math.max(...numbers)));
}

solution();
