const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  const obj = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  const inputNum = input.map((el) => Number(el));
  const [num1, num2, num3] = inputNum;
  let mul = (num1 * num2 * num3).toString();

  for (let num of mul) {
    obj[num] += 1;
  }

  let result = Object.values(obj).join('\n');
  console.log(result);
}

solution();
