const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  let i = 1;

  while (i <= Number(input[0])) {
    let answer = '';
    let str = input[i].split(' ');
    let j = 0;
    while (j < str[1].length) {
      answer += str[1][j].repeat(Number(str[0]));
      j++;
    }
    console.log(answer);
    i++;
  }
}

solution();
