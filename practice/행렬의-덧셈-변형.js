// programmers level1 행렬의 덧셈 변형 문제

// 행렬의 덧셈 + 모든 요소 더한 값 출력하기
function solution(arr1, arr2) {
  const matrix = arr1.map((elArr, row) =>
    elArr.map((el, col) => {
      return el + arr2[row][col];
    })
  );
  console.log('matrix :>> ', matrix); // 행렬의 덧셈 => [ [ 4, 6 ], [ 7, 9 ] ]

  const sum = matrix.reduce((acc, cur) => {
    console.log('acc :>> ', acc); // [4, 6]
    console.log('cur :>> ', cur); // [7, 9]
    return [
      acc.reduce((a, b) => {
        console.log('a', a); // 4
        console.log('b', b); // 6
        return a + b;
      }) +
        cur.reduce((a, b) => {
          console.log('a', a); // 7
          console.log('b', b); // 9
          return a + b;
        }),
    ];
  });

  console.log('sum :>> ', sum); // [26]
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
