let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let numArr = input.map(Number);
console.log("numArr", numArr);

let newArr = [...new Set(numArr)];

newArr.sort(function (a, b) {
  return a - b;
});

let answer = "";

for (let i = 0; i < newArr.length; i++) {
  // 줄바꿈 추가
  answer += newArr[i] + "\n";
}

console.log(answer);
