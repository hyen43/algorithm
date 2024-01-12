var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);

let start = 1; // 시작점
let end = arr.reduce((a, b) => Math.max(a, b)); // 끝점(가장 크다면 가장 큰 지방 요청액 금액)

console.log("end", end);

let result = 0;
// 이진탐색 수행
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    // 각 지방에서 요청한 예산을 하나씩 확인하며 예산 배정
    // 상한액보다 작다면 total에 더해줌
    total += Math.min(mid, x);
  }
  // 조건을 만족한다면, 상한액(최대화가 목표)을 증가
  if (total <= m) {
    result = mid;
    start = mid + 1;
  }
  // 조건을 만족하지 못한다면, 상한액을 감소
  else {
    end = mid - 1;
  }
}

console.log("result", result);
