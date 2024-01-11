let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// 각각의 데이터를 수 데이터로 변경
let numArr = input[0].split(" ").map(Number);

numArr.sort(function (a, b) {
  // 오름차순
  return a - b;
});

let answer = "";
for (let i = 0; i < numArr.length; i++) {
  answer += numArr[i] + "";
}

console.log(answer);
