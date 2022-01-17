/*********************************************************************
 *Title : A+B - 3
 *Number : <img src="https://d2gd6pc034wcta.cloudfront.net/tier/3.svg" class="solvedac-tier">&nbsp;10950번
 *Author : sandoll99
 *Description : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 *Input : 첫째 줄에 테스트 케이스의 개수 T가 주어진다.각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
 *Output : 각 테스트 케이스마다 A+B를 출력한다.
 *Start Time : 2022년 0월 18일 0시 13분 16초
 *End Time : 2022년 0월 18일 시 분 초
 *comments program : https://chrome.google.com/webstore/detail/boj-blog-post/ehhcjhfkaiohgflkjifmageahncijacd?hl=ko
 *********************************************************************/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');

    console.log(Number(numbers[0]) + Number(numbers[1]));
  }
}

solution();
