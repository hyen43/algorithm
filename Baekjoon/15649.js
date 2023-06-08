let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ");
const N = Number(n);
const M = Number(m);

let result = "";
const resultArr = [];
const visited = new Array(N).fill(false);

function dfs(count) {
  if (count === M) {
    result += `${resultArr.join(" ")}\n`;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    resultArr.push(i + 1);
    dfs(count + 1);
    resultArr.pop();
    visited[i] = false;
  }
  return result;
}

console.log(dfs(0));
